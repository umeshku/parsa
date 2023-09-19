from django.shortcuts import render
from django.http import HttpResponse
from django.shortcuts import get_object_or_404, render, redirect
from .forms import importdataform
# Create your views here.
def importData (request):
    if request.method == 'POST':
        dataset = request.POST['dataset']
        import_file = request.FILES['importData']
        if (str(import_file).split('.')[-1] == "xlsx"):

            logger.error("You are Here in Household Section Section '{0}'".format(import_file))

            sheet = import_file.get_records()
            TR = len(sheet)
            i = 0
            j = 0
            iniciate = datetime.utcnow().replace(tzinfo=utc)
            logger.error(iniciate)
            for record in sheet:
                Rtime = datetime.utcnow().replace(tzinfo=utc)
                choicsModel = Attribute_choices_list

                if dataset == "household":
                    # logger.error("You are Here in Household Section Section '{0}'".format(import_file))
                    model = Household
                    model_A = Household_Attribute
                elif dataset == "personal":
                    # logger.error("You are Here in house Section Section '{0}'".format(import_file))
                    model = Personal
                    model_A = Personal_Attribute
                for key, value in dict(record).items():
                    if value == '':
                        del record[key]
                    elif value != '' and value != 'other':
                        # logger.error( dataQ.count())
                        dataQ = model_A.objects.all().filter(odk_question=key)
                        # logger.error( key+":"+str(dataQ.count()))
                        if dataQ.count() == 1:
                            for r in dataQ:

                                if r.choice_list != '' and not (r.choice_list is None):
                                    # logger.error(r.choice_list)
                                    if r.is_multiple == 'no':
                                        choice_Value = choicsModel.objects.all().filter(list_name=r.choice_list,
                                                                                        name=value)
                                        # logger.error(choice_Value.count())
                                        if choice_Value.count() == 1:
                                            for r2 in choice_Value:
                                                record[key] = r2.label
                                                # logger.error(record[key])
                                    elif r.is_multiple == 'yes':
                                        values1 = str(value).split(' ')
                                        valueTxt = []
                                        #    logger.error(values1)
                                        for item in values1:
                                            if item != 'other':
                                                item1 = int(item)
                                                choice_Value = choicsModel.objects.all().filter(list_name=r.choice_list,
                                                                                                name=item1)
                                                for r2 in choice_Value:
                                                    valueTxt.append(r2.label)
                                            elif item == 'other':
                                                valueTxt.append(item)
                                                pass
                                        comb = "|".join(valueTxt)

                                        record[key] = comb
                                    #    logger.error(key+":"+record[key])
                        else:
                            logger.error("More or less then one odk_question")

                data = model_A.objects.all().filter(datatype="text")
                for row in data:
                    key = row.odk_question
                    if key in record:
                        record[key] = str(record[key])
                data0 = model_A.objects.all().filter(datatype="date")
                for row in data0:
                    key = row.odk_question
                    # logger.error(key)
                    if key in record:
                        record[key] = datetime.strptime(record[key], '%m/%d/%Y %H:%M')

                c = model.objects.all().filter(KEY=record['KEY'])
                # logger.error(c.count())
                if (c.count() == 0):
                    # logger.error(record['KEY'])
                    m = model(**record)
                    m.save()
                    # logger.error(m)
                    i += 1
                elif (c.count() == 1):
                    # model.objects.filter(KEY=record['KEY']).update(**record)

                    j += 1
                ART = datetime.utcnow().replace(tzinfo=utc)
                ART_diff = (ART - iniciate).total_seconds()
                onerecod = (ART - Rtime).total_seconds()
                logger.error(
                    "TotalTime:{7}, time for this:{8}, {4} dataset: {3} out of {0} data processed of which {1} Data added and {2} data already Exit".format(
                        TR, i, j, i + j, model.__name__, iniciate, ART, ART_diff, onerecod))

            return render(request, 'smartprofile/import.html', {'nbar': "importData", 'importdataform': importdataform,
                                                                'Massage': "Initial Time:{5}, Now:{6}, TimeDiff:{7}, {4} dataset: {3} out of {0} data processed of which {1} Data added and {2} data already Exit".format(
                                                                    TR, i, j, i + j, model.__name__, iniciate, ART,
                                                                    ART_diff)})
        logger.error((datetime.utcnow().replace(tzinfo=utc) - iniciate).total_seconds())

    return render(request, 'upload/import.html', {'nbar': "importData", 'importdataform': importdataform})

