from django.db import models

# Create your models here.
class Household(models.Model):

    Ward = models.IntegerField("वडा न", blank=True, null=True)
    Tol = models.CharField("गाउँ टोल/बस्तीको नाम ", blank=True, null=True, max_length=200)
    HouseCode = models.CharField("घर नं ", blank=True, null=True, max_length=200)
    RoadName = models.CharField("सडकको नामः  ", blank=True, null=True, max_length=200)
    HousePhoto = models.CharField("घरको फोटो", blank=True, null=True, max_length=200)
    Latitude = models.DecimalField("Latitude", blank=True, null=True, max_digits=15, decimal_places=8)
    Longitude = models.DecimalField("Longitude", blank=True, null=True, max_digits=15, decimal_places=8)
    Altitude = models.DecimalField("Altitude", blank=True, null=True, max_digits=15, decimal_places=8)
    Accuracy = models.DecimalField("Accuracy", blank=True, null=True, max_digits=15, decimal_places=8)

    Funcational_Type = models.CharField("घरको प्रयोजन प्रकार (बहुउत्तर सम्भव छ)", blank=True, null=True, max_length=200)
    Funcational_Type_other = models.CharField("घरको प्रयोजन प्रकार (अन्य)", blank=True, null=True, max_length=200)

    Q3_1 = models.CharField("Q3_1. तला(Storey)", blank=True, null=True, max_length=200)
    Q3_2 = models.CharField("Q3_2. छानाको किसिम", blank=True, null=True, max_length=200)
    Q3_3 = models.CharField("Q3_3. गारोको किसिम", blank=True, null=True, max_length=200)
    Q3_4 = models.CharField("Q3_4. घरको अवस्था", blank=True, null=True, max_length=200)
    Q3_5 = models.CharField("Q3_5. घरको उमेर", blank=True, null=True, max_length=200)
    Q3_6 = models.CharField("Q3_6. घरको जग कस्तो प्रकारको छ? ", blank=True, null=True, max_length=200)
    Q3_61 = models.CharField(" Q3_61. घरको जग  प्रकारको अन्य भए लेखनुहोस? ", blank=True, null=True, max_length=200)
    Q5 = models.CharField("Q5. परिवार र बसोबासको किसिम", blank=True, null=True, max_length=200)
    Q6 = models.CharField("Q6. एकै घर मा कति ओटा परिवार (Family) बस्नु हुन्छ?", blank=True, null=True, max_length=200)
    Q7 = models.CharField("Q7. परिवारमूलीको पूरा नाम थर ", blank=True, null=True, max_length=200)
    Q7_1 = models.CharField("Q7.1. घर मुलीको पुरा नाम थर", blank=True, null=True, max_length=200)
    Q8 = models.CharField("Q8. परिवारमूलीको लिङ्ग के हो?", blank=True, null=True, max_length=200,
                          )
    Q11 = models.CharField("Q11. उत्तरदाता परिवारमूली हो?", blank=True, null=True, max_length=200,
                           )
    Q9 = models.CharField("Q9. उत्तरदाताको पूरा नाम थर ", blank=True, null=True, max_length=200)
    Q10 = models.CharField("Q10. उत्तरदाताको लिङ्ग के हो?", blank=True, null=True, max_length=200,
                           )
    total_pop = models.IntegerField("total_pop. जम्मा परिवार सदस्य संख्या", blank=True, null=True)

    Q37 = models.CharField("q37. बालबच्चालाई कून स्कूलमा पढाउनु हुन्छ ?", blank=True, null=True, max_length=200,
                           )
    Q37_1 = models.IntegerField("Q37_1. स्कूल सम्म पुग्न कति समय लाग्छ (मिनेटमा लेख्नुहोस)", blank=True, null=True)

    Q35 = models.CharField(
        "Q35. तपाईको परिबारमा ब्यक्तिगत घटना विवरण जन्म /मृत्यु/बसाईसराई/विवाह/सम्बन्ध विच्छेद  दर्ता गर्नु भएको छ?",
        blank=True, null=True, max_length=200)
    Q35_1 = models.CharField("Q35. यदि छैन भने किन गर्नु भएन", blank=True, null=True, max_length=200,
                             )

    Q34 = models.CharField("Q34. तपाई वा परिवार बसोवास गरेको घर/भवनको स्वामित्वको अवस्था कस्तो हो ", blank=True,
                           null=True, max_length=200, )
    Q34_1 = models.CharField("Q34_. अन्य भए उल्लेख गर्ने", blank=True, null=True, max_length=200)
    Q36 = models.CharField(
        "Q36. तपाईले बसोवास गरेको घर/भवन बाहेक तपाई वा परिवारको स्वामित्वमा यस नगरपालिकामा अन्य भवन पनि छ ", blank=True,
        null=True, max_length=200,)
    Q39 = models.CharField("Q39. तपाईको घरसम्म मोटरबाटोको सुविधा छ ?", blank=True, null=True, max_length=200,)
    Q40 = models.CharField("Q40. तपाईको घर सम्म जाने सडकको किसिम कस्तो छ ?", blank=True, null=True, max_length=200,
                           )

    Q41 = models.CharField("Q41. नेपाल भित्र तपाई वा परिवारको स्वामित्वमा जग्गा/जमीन/घडेरी छ ?", blank=True, null=True,
                           max_length=200, )

    Q41_2 = models.CharField("Q41.2 यदि छ भने कस्को नाममा छ", blank=True, null=True, max_length=200,
                             )

    Q41_3 = models.CharField("Q41.3 यदि छैन भने बसोबस गरीरहेको जमिन /जग्गा कस्तो प्रकारको हो ", blank=True, null=True,
                             max_length=200,)

    Q41_1 = models.CharField("Q41_1. तपाइको आफ्नो खेत छ कि छैन यदि छ भने खेत कति प्रतिसत सिंचित खेत छ?", blank=True,
                             null=True, max_length=200, )
    Q42_1_1 = models.DecimalField("Q42_1_1. बिघा", blank=True, null=True, max_digits=15, decimal_places=8)
    Q42_1_2 = models.DecimalField("Q42_1_2. कट्ठा", blank=True, null=True, max_digits=15, decimal_places=8)
    Q42_1_3 = models.DecimalField("Q42_1_3. धुर", blank=True, null=True, max_digits=15, decimal_places=8)
    Q42_3_1 = models.DecimalField("Q42_3_1. बिघा", blank=True, null=True, max_digits=15, decimal_places=8)
    Q42_3_2 = models.DecimalField("Q42_3_2. कट्ठा", blank=True, null=True, max_digits=15, decimal_places=8)
    Q42_3_3 = models.DecimalField("Q42_3_3. धुर", blank=True, null=True, max_digits=15, decimal_places=8)
    Q43 = models.CharField("Q43. उक्त विवरणमा महिला सदस्यको नाममा स्वामित्व रहेको छ ?", blank=True, null=True,
                           max_length=200, )
    Q44_1_1 = models.DecimalField("Q44_1_1. बिघा", blank=True, null=True, max_digits=15, decimal_places=8)
    Q44_1_2 = models.DecimalField("Q44_1_2. कट्ठा", blank=True, null=True, max_digits=15, decimal_places=8)
    Q44_1_3 = models.DecimalField("Q44_1_3. धुर", blank=True, null=True, max_digits=15, decimal_places=8)
    Q44_3_1 = models.DecimalField("Q44_3_1. बिघा", blank=True, null=True, max_digits=15, decimal_places=8)
    Q44_3_2 = models.DecimalField("Q44_3_2. कट्ठा", blank=True, null=True, max_digits=15, decimal_places=8)
    Q44_3_3 = models.DecimalField("Q44_3_3. धुर", blank=True, null=True, max_digits=15, decimal_places=8)
    Q45 = models.CharField("Q45. उक्त विवरणमा महिला सदस्यको नाममा स्वामित्व रहेको छ ?", blank=True, null=True,
                           max_length=200, )

    Q48_a = models.CharField("Q48_a. परिवारको खानेपानीको मुख्यस्रोत कुन हो ?", blank=True, null=True, max_length=200,
                             )
    Q48_c = models.CharField("Q48_c. स्रोत अन्य (खुलाउने)", blank=True, null=True, max_length=200)

    Q48_a1 = models.CharField("Q48_a1. मुख्यस्रोत को पानि को गुणस्तर कस्तो छ ?", blank=True, null=True, max_length=200,
                              )

    Q48_a2 = models.CharField("Q48_a2. मुख्यश्रोतको पानीको प्रशोधन कसरी गर्नुहुन्छ??", blank=True, null=True,
                              max_length=200, )
    Q48_a3 = models.CharField("Q48_a3. मुख्यस्रोत बाट पानीको पर्याप्त आउछ?", blank=True, null=True, max_length=200,
                              )

    Q49 = models.CharField("Q49. पाइपबाट आउने पानी प्रयोग गर्नुहुन्छ भने त्यसको स्वामित्व कसको हो ?", blank=True,
                           null=True, max_length=200, )

    Q50 = models.CharField("Q50. खानेपानीको स्रोत सम्म गएर पानी लिएर आउन कति समय लाग्छ ?", blank=True, null=True,
                           max_length=200, )

    Q55 = models.CharField("Q55. आफ्नो स्वामित्वको चर्पी छ ?", blank=True, null=True, max_length=200,
                           )

    Q56 = models.CharField("Q56. तपाईको परिवारले कस्तो चर्पी प्रयोग गर्नुहुन्छ ?", blank=True, null=True,
                           max_length=200, )

    Q59 = models.CharField("Q59. फोहर पानीको व्यवस्थापन कसरी गर्नुभएको छ ?", blank=True, null=True, max_length=200,
                           )

    Q60 = models.CharField("Q60. तपाईको घरबाट निस्कने ठोस फोहरमैला कसरी बिसर्जन गर्नुहुन्छ ?  (बहुउत्तर सम्भव छ)",
                           blank=True, null=True, max_length=200, )
    Q60_1 = models.CharField("Q60_1. अन्य भए उल्लेख गर्ने", blank=True, null=True, max_length=200)

    Q61 = models.CharField("Q61. तपाईको परिवारमा खाना पकाउन अक्सर (मुख्य रुपमा) कुन इन्धन प्रयोग गर्नुहुन्छ ?",
                           blank=True, null=True, max_length=200, )

    Q62 = models.CharField(
        "Q62. यदि काठ/दाउरार गोबर/गुइठा (मुख्य रुपमा) इन्धन प्रयोग गर्नुहुन्छ भने कस्तो प्रकारको चुलो प्रयोग गर्नुहुन्छ ?",
        blank=True, null=True, max_length=200, )

    Q63 = models.CharField("Q63. तपाईको परिवारमा बत्ती बाल्न अक्सर (मुख्य रुपमा) कुन श्रोत प्रयोग गर्नुहुन्छ ?",
                           blank=True, null=True, max_length=200, )
    Q65 = models.CharField("Q65. यदि बिजुलीको प्रयोग गर्नुभएको छ भने, आफ्नै घरमा बिजुलीको मिटर जडान भएको छ ?",
                           blank=True, null=True, max_length=200, )

    Q66 = models.CharField("Q66. तपाईको परिवारले मुख्यतया के–कस्तो कृषि उत्पादन गर्छ ? (बहुउत्तर सम्भव छ) ", blank=True,
                           null=True, max_length=200, )
    Q66_1a = models.DecimalField("Q66_1a. बाली लगाएको जग्गाको क्षेत्रफल (बिघामा)", blank=True, null=True, max_digits=15,
                                 decimal_places=8)
    Q66_1a_1 = models.DecimalField("Q66_1a_1. बाली लगाएको जग्गाको क्षेत्रफल (कठ्ठा)", blank=True, null=True,
                                   max_digits=15, decimal_places=8)
    Q66_1a_2 = models.DecimalField("Q66_1a_2. बाली लगाएको जग्गाको क्षेत्रफल (धुर)", blank=True, null=True,
                                   max_digits=15, decimal_places=8)
    Q66_1b = models.DecimalField("Q66_1b. बालीको उत्पादन परिमाण  के जीमा", blank=True, null=True, max_digits=15,
                                 decimal_places=8)
    Q66_1c = models.DecimalField("Q66_1c. विक्री परिमाण (के जी)", blank=True, null=True, max_digits=15,
                                 decimal_places=8)
    Q66_2a = models.DecimalField("Q66_2a. बाली लगाएको जग्गाको क्षेत्रफल(बिघामा)", blank=True, null=True, max_digits=15,
                                 decimal_places=8)
    Q66_2a_1 = models.DecimalField("Q66_2a_1. बाली लगाएको जग्गाको क्षेत्रफल (कठ्ठा)", blank=True, null=True,
                                   max_digits=15, decimal_places=8)
    Q66_2a_2 = models.DecimalField("Q66_2a_2. बाली लगाएको जग्गाको क्षेत्रफल (धुर)", blank=True, null=True,
                                   max_digits=15, decimal_places=8)
    Q66_2b = models.DecimalField("Q66_2b. बालीको उत्पादन परिमाण  के जीमा", blank=True, null=True, max_digits=15,
                                 decimal_places=8)
    Q66_2c = models.DecimalField("Q66_2c. विक्री परिमाण (के जी)", blank=True, null=True, max_digits=15,
                                 decimal_places=8)
    Q66_3a = models.DecimalField("Q66_3a. बाली लगाएको जग्गाको क्षेत्रफल(बिघामा)", blank=True, null=True, max_digits=15,
                                 decimal_places=8)
    Q66_3a_1 = models.DecimalField("Q66_3a_1. बाली लगाएको जग्गाको क्षेत्रफल (कठ्ठा)", blank=True, null=True,
                                   max_digits=15, decimal_places=8)
    Q66_3a_2 = models.DecimalField("Q66_3a_2. बाली लगाएको जग्गाको क्षेत्रफल (धुर)", blank=True, null=True,
                                   max_digits=15, decimal_places=8)
    Q66_3b = models.DecimalField("Q66_3b. बालीको उत्पादन परिमाण  के जीमा", blank=True, null=True, max_digits=15,
                                 decimal_places=8)
    Q66_3c = models.DecimalField("Q66_3c. विक्री परिमाण (के जी)", blank=True, null=True, max_digits=15,
                                 decimal_places=8)
    Q66_4a = models.DecimalField("Q66_4a. बाली लगाएको जग्गाको क्षेत्रफल(बिघामा)", blank=True, null=True, max_digits=15,
                                 decimal_places=8)
    Q66_4a_1 = models.DecimalField("Q66_4a_1. बाली लगाएको जग्गाको क्षेत्रफल (कठ्ठा)", blank=True, null=True,
                                   max_digits=15, decimal_places=8)
    Q66_4a_2 = models.DecimalField("Q66_4a_2. बाली लगाएको जग्गाको क्षेत्रफल (धुर)", blank=True, null=True,
                                   max_digits=15, decimal_places=8)
    Q66_4b = models.DecimalField("Q66_4b. बालीको उत्पादन परिमाण  के जीमा", blank=True, null=True, max_digits=15,
                                 decimal_places=8)
    Q66_4c = models.DecimalField("Q66_4b. विक्री परिमाण (के जी)", blank=True, null=True, max_digits=15,
                                 decimal_places=8)
    Q66_5a = models.DecimalField("Q66_5a. बाली लगाएको जग्गाको क्षेत्रफल(बिघामा)", blank=True, null=True, max_digits=15,
                                 decimal_places=8)
    Q66_5a_1 = models.DecimalField("Q66_5a_1. बाली लगाएको जग्गाको क्षेत्रफल (कठ्ठा)", blank=True, null=True,
                                   max_digits=15, decimal_places=8)
    Q66_5a_2 = models.DecimalField("Q66_5a_2. बाली लगाएको जग्गाको क्षेत्रफल (धुर)", blank=True, null=True,
                                   max_digits=15, decimal_places=8)
    Q66_5b = models.DecimalField("Q66_5b. बालीको उत्पादन परिमाण  के जीमा", blank=True, null=True, max_digits=15,
                                 decimal_places=8)
    Q66_5c = models.DecimalField("Q66_5c. विक्री परिमाण (के जी)", blank=True, null=True, max_digits=15,
                                 decimal_places=8)
    Q66_6a = models.DecimalField("Q66_6a. बाली लगाएको जग्गाको क्षेत्रफल(बिघामा)", blank=True, null=True, max_digits=15,
                                 decimal_places=8)
    Q66_6a_1 = models.DecimalField("Q66_6a_1. बाली लगाएको जग्गाको क्षेत्रफल (कठ्ठा)", blank=True, null=True,
                                   max_digits=15, decimal_places=8)
    Q66_6a_2 = models.DecimalField("Q66_6a_2. बाली लगाएको जग्गाको क्षेत्रफल (धुर)", blank=True, null=True,
                                   max_digits=15, decimal_places=8)
    Q66_6b = models.DecimalField("Q66_6b. बालीको उत्पादन परिमाण के जीमा", blank=True, null=True, max_digits=15,
                                 decimal_places=8)
    Q66_6c = models.DecimalField("Q66_6c. विक्री परिमाण (के जी)", blank=True, null=True, max_digits=15,
                                 decimal_places=8)
    Q66_7a = models.DecimalField("Q66_7a. बाली लगाएको जग्गाको क्षेत्रफल(बिघामा)", blank=True, null=True, max_digits=15,
                                 decimal_places=8)
    Q66_7a_1 = models.DecimalField("Q66_7a_1. बाली लगाएको जग्गाको क्षेत्रफल (कठ्ठा)", blank=True, null=True,
                                   max_digits=15, decimal_places=8)
    Q66_7a_2 = models.DecimalField("Q66_7a_2. बाली लगाएको जग्गाको क्षेत्रफल (धुर)", blank=True, null=True,
                                   max_digits=15, decimal_places=8)
    Q66_7b = models.DecimalField("Q66_7b. बालीको उत्पादन परिमाण के जीमा", blank=True, null=True, max_digits=15,
                                 decimal_places=8)
    Q66_7c = models.DecimalField("Q66_7c. विक्री परिमाण (के जी)", blank=True, null=True, max_digits=15,
                                 decimal_places=8)
    Q66_8a = models.DecimalField("Q66_8a. बाली लगाएको जग्गाको क्षेत्रफल(बिघामा)", blank=True, null=True, max_digits=15,
                                 decimal_places=8)
    Q66_8a_1 = models.DecimalField("Q66_8a_1. बाली लगाएको जग्गाको क्षेत्रफल (कठ्ठा)", blank=True, null=True,
                                   max_digits=15, decimal_places=8)
    Q66_8a_2 = models.DecimalField("Q66_8a_2. बाली लगाएको जग्गाको क्षेत्रफल (धुर)", blank=True, null=True,
                                   max_digits=15, decimal_places=8)
    Q66_8b = models.DecimalField("Q66_8b. बालीको उत्पादन परिमाण के जीमा", blank=True, null=True, max_digits=15,
                                 decimal_places=8)
    Q66_8c = models.DecimalField("Q66_8c. विक्री परिमाण (के जी)", blank=True, null=True, max_digits=15,
                                 decimal_places=8)
    Q66_9a = models.DecimalField("Q66_9a.  बाली लगाएको जग्गाको क्षेत्रफल(बिघामा)", blank=True, null=True, max_digits=15,
                                 decimal_places=8)
    Q66_9a_1 = models.DecimalField("Q66_9a_1. बाली लगाएको जग्गाको क्षेत्रफल (कठ्ठा)", blank=True, null=True,
                                   max_digits=15, decimal_places=8)
    Q66_9a_2 = models.DecimalField("Q66_9a_2. बाली लगाएको जग्गाको क्षेत्रफल (धुर)", blank=True, null=True,
                                   max_digits=15, decimal_places=8)
    Q66_9b = models.DecimalField("Q66_9b.  बालीको उत्पादन परिमाण  के जीमा", blank=True, null=True, max_digits=15,
                                 decimal_places=8)
    Q66_9c = models.DecimalField("Q66_9c.  विक्री परिमाण (के जी)", blank=True, null=True, max_digits=15,
                                 decimal_places=8)
    Q66_10a = models.DecimalField("Q66_10a.  बाली लगाएको जग्गाको क्षेत्रफल(बिघामा)", blank=True, null=True,
                                  max_digits=15, decimal_places=8)
    Q66_10a_1 = models.DecimalField("Q66_10a_1. बाली लगाएको जग्गाको क्षेत्रफल (कठ्ठा)", blank=True, null=True,
                                    max_digits=15, decimal_places=8)
    Q66_10a_2 = models.DecimalField("Q66_10a_2. बाली लगाएको जग्गाको क्षेत्रफल (धुर)", blank=True, null=True,
                                    max_digits=15, decimal_places=8)
    Q66_10b = models.DecimalField("Q66_10b.  बालीको उत्पादन परिमाण के जीमा", blank=True, null=True, max_digits=15,
                                  decimal_places=8)
    Q66_10c = models.DecimalField("Q66_10c.  विक्री परिमाण (के जी)", blank=True, null=True, max_digits=15,
                                  decimal_places=8)
    Q66_11a = models.DecimalField("Q66_11a.  बाली लगाएको जग्गाको क्षेत्रफल(बिघामा)", blank=True, null=True,
                                  max_digits=15, decimal_places=8)
    Q66_11a_1 = models.DecimalField("Q66_11a_1. बाली लगाएको जग्गाको क्षेत्रफल (कठ्ठा)", blank=True, null=True,
                                    max_digits=15, decimal_places=8)
    Q66_11a_2 = models.DecimalField("Q66_11a_2. बाली लगाएको जग्गाको क्षेत्रफल (धुर)", blank=True, null=True,
                                    max_digits=15, decimal_places=8)
    Q66_11b = models.DecimalField("Q66_11b.  बालीको उत्पादन परिमाण के जीमा", blank=True, null=True, max_digits=15,
                                  decimal_places=8)
    Q66_11c = models.DecimalField("Q66_11c.  विक्री परिमाण (के जी)", blank=True, null=True, max_digits=15,
                                  decimal_places=8)
    Q66_12a = models.DecimalField("Q66_12a.  बाली लगाएको जग्गाको क्षेत्रफल(बिघामा)", blank=True, null=True,
                                  max_digits=15, decimal_places=8)
    Q66_12a_1 = models.DecimalField("Q66_12a_1. बाली लगाएको जग्गाको क्षेत्रफल (कठ्ठा)", blank=True, null=True,
                                    max_digits=15, decimal_places=8)
    Q66_12a_2 = models.DecimalField("Q66_12a_2. बाली लगाएको जग्गाको क्षेत्रफल (धुर)", blank=True, null=True,
                                    max_digits=15, decimal_places=8)
    Q66_12b = models.DecimalField("Q66_12b.  बालीको उत्पादन परिमाण के जीमा", blank=True, null=True, max_digits=15,
                                  decimal_places=8)
    Q61_12c = models.DecimalField("Q61_12c.  विक्री परिमाण (के जी)", blank=True, null=True, max_digits=15,
                                  decimal_places=8)
    Q66_13a = models.DecimalField("Q66_13a.  बाली लगाएको जग्गाको क्षेत्रफल(बिघामा)", blank=True, null=True,
                                  max_digits=15, decimal_places=8)
    Q66_13a_1 = models.DecimalField("Q66_13a_1. बाली लगाएको जग्गाको क्षेत्रफल (कठ्ठा)", blank=True, null=True,
                                    max_digits=15, decimal_places=8)
    Q66_13a_2 = models.DecimalField("Q66_13a_2. बाली लगाएको जग्गाको क्षेत्रफल (धुर)", blank=True, null=True,
                                    max_digits=15, decimal_places=8)
    Q66_13b = models.DecimalField("Q66_13b.  बालीको उत्पादन परिमाण  के जीमा", blank=True, null=True, max_digits=15,
                                  decimal_places=8)
    Q66_13c = models.DecimalField("Q66_13c.  विक्री परिमाण (के जी)", blank=True, null=True, max_digits=15,
                                  decimal_places=8)
    Q66_14a = models.DecimalField("Q66_14a.  बाली लगाएको जग्गाको क्षेत्रफल(बिघामा)", blank=True, null=True,
                                  max_digits=15, decimal_places=8)
    Q66_14a_1 = models.DecimalField("Q66_14a_1. बाली लगाएको जग्गाको क्षेत्रफल (कठ्ठा)", blank=True, null=True,
                                    max_digits=15, decimal_places=8)
    Q66_14a_2 = models.DecimalField("Q66_14a_2. बाली लगाएको जग्गाको क्षेत्रफल (धुर)", blank=True, null=True,
                                    max_digits=15, decimal_places=8)
    Q66_14b = models.DecimalField("Q66_14b.  बालीको उत्पादन परिमाण के जीमा", blank=True, null=True, max_digits=15,
                                  decimal_places=8)
    Q66_14c = models.DecimalField("Q66_14c.  विक्री परिमाण  के जीमा", blank=True, null=True, max_digits=15,
                                  decimal_places=8)
    Q66_15a = models.DecimalField("Q66_15a.  बाली लगाएको जग्गाको क्षेत्रफल(बिघामा)", blank=True, null=True,
                                  max_digits=15, decimal_places=8)
    Q66_15a_1 = models.DecimalField("Q66_15a_1. बाली लगाएको जग्गाको क्षेत्रफल (कठ्ठा)", blank=True, null=True,
                                    max_digits=15, decimal_places=8)
    Q66_15a_2 = models.DecimalField("Q66_15a_2. बाली लगाएको जग्गाको क्षेत्रफल (धुर)", blank=True, null=True,
                                    max_digits=15, decimal_places=8)
    Q66_15b = models.DecimalField("Q66_15b.  बालीको उत्पादन परिमाण  के जीमा", blank=True, null=True, max_digits=15,
                                  decimal_places=8)
    Q66_15c = models.DecimalField("Q66_15c.  विक्री परिमाण  के जीमा", blank=True, null=True, max_digits=15,
                                  decimal_places=8)
    Q66_16a = models.DecimalField("Q66_16a.  बाली लगाएको जग्गाको क्षेत्रफल(बिघामा)", blank=True, null=True,
                                  max_digits=15, decimal_places=8)
    Q66_16a_1 = models.DecimalField("Q66_16a_1. बाली लगाएको जग्गाको क्षेत्रफल (कठ्ठा)", blank=True, null=True,
                                    max_digits=15, decimal_places=8)
    Q66_16a_2 = models.DecimalField("Q66_16a_2. बाली लगाएको जग्गाको क्षेत्रफल (धुर)", blank=True, null=True,
                                    max_digits=15, decimal_places=8)
    Q66_16b = models.DecimalField("Q66_16b.  बालीको उत्पादन परिमाण  के जीमा", blank=True, null=True, max_digits=15,
                                  decimal_places=8)
    Q66_16c = models.DecimalField("Q66_16c.  विक्री परिमाण  के जीमा", blank=True, null=True, max_digits=15,
                                  decimal_places=8)
    Q66_17a = models.DecimalField("Q66_17a.  बाली लगाएको जग्गाको क्षेत्रफल(बिघामा)", blank=True, null=True,
                                  max_digits=15, decimal_places=8)
    Q66_17a_1 = models.DecimalField("Q66_17a_1. बाली लगाएको जग्गाको क्षेत्रफल (कठ्ठा)", blank=True, null=True,
                                    max_digits=15, decimal_places=8)
    Q66_17a_2 = models.DecimalField("Q66_17a_2. बाली लगाएको जग्गाको क्षेत्रफल (धुर)", blank=True, null=True,
                                    max_digits=15, decimal_places=8)
    Q66_17b = models.DecimalField("Q66_17b.  बालीको उत्पादन परिमाण  के जीमा", blank=True, null=True, max_digits=15,
                                  decimal_places=8)
    Q66_17c = models.DecimalField("Q66_17c.  विक्री परिमाण (के जी)", blank=True, null=True, max_digits=15,
                                  decimal_places=8)
    Q66_18a = models.DecimalField("Q66_18a.  बाली लगाएको जग्गाको क्षेत्रफल(बिघामा)", blank=True, null=True,
                                  max_digits=15, decimal_places=8)
    Q66_18a_1 = models.DecimalField("Q66_18a_1. बाली लगाएको जग्गाको क्षेत्रफल (कठ्ठा)", blank=True, null=True,
                                    max_digits=15, decimal_places=8)
    Q66_18a_2 = models.DecimalField("Q66_18a_2. बाली लगाएको जग्गाको क्षेत्रफल (धुर)", blank=True, null=True,
                                    max_digits=15, decimal_places=8)
    Q66_18b = models.DecimalField("Q66_18b.  बालीको उत्पादन परिमाण के जीमा", blank=True, null=True, max_digits=15,
                                  decimal_places=8)
    Q66_18c = models.DecimalField("Q66_18c.  विक्री परिमाण (के जी)", blank=True, null=True, max_digits=15,
                                  decimal_places=8)
    Q66_19a = models.DecimalField("Q66_19a.  बाली लगाएको जग्गाको क्षेत्रफल(बिघामा)", blank=True, null=True,
                                  max_digits=15, decimal_places=8)
    Q66_19a_1 = models.DecimalField("Q66_19a_1. बाली लगाएको जग्गाको क्षेत्रफल (कठ्ठा)", blank=True, null=True,
                                    max_digits=15, decimal_places=8)
    Q66_19a_2 = models.DecimalField("Q66_19a_2. बाली लगाएको जग्गाको क्षेत्रफल (धुर)", blank=True, null=True,
                                    max_digits=15, decimal_places=8)
    Q66_19b = models.DecimalField("Q66_19b.  बालीको उत्पादन परिमाण के जीमा", blank=True, null=True, max_digits=15,
                                  decimal_places=8)
    Q66_19c = models.DecimalField("Q66_19c.  विक्री परिमाण (के जी)", blank=True, null=True, max_digits=15,
                                  decimal_places=8)
    Q66_20a = models.DecimalField("Q66_20a.  बाली लगाएको जग्गाको क्षेत्रफल(बिघामा)", blank=True, null=True,
                                  max_digits=15, decimal_places=8)
    Q66_20a_1 = models.DecimalField("Q66_20a_1. बाली लगाएको जग्गाको क्षेत्रफल (कठ्ठा)", blank=True, null=True,
                                    max_digits=15, decimal_places=8)
    Q66_20a_2 = models.DecimalField("Q66_20a_2. बाली लगाएको जग्गाको क्षेत्रफल (धुर)", blank=True, null=True,
                                    max_digits=15, decimal_places=8)
    Q66_20b = models.DecimalField("Q66_20b.  बालीको उत्पादन परिमाण के जीमा", blank=True, null=True, max_digits=15,
                                  decimal_places=8)
    Q66_20c = models.DecimalField("Q66_20c.  विक्री परिमाण (के जी)", blank=True, null=True, max_digits=15,
                                  decimal_places=8)
    Q66_21a = models.DecimalField("Q66_21a.  बाली लगाएको जग्गाको क्षेत्रफल(बिघामा)", blank=True, null=True,
                                  max_digits=15, decimal_places=8)
    Q66_21a_1 = models.DecimalField("Q66_21a_1. बाली लगाएको जग्गाको क्षेत्रफल (कठ्ठा)", blank=True, null=True,
                                    max_digits=15, decimal_places=8)
    Q66_21a_2 = models.DecimalField("Q66_21a_2. बाली लगाएको जग्गाको क्षेत्रफल (धुर)", blank=True, null=True,
                                    max_digits=15, decimal_places=8)
    Q66_21b = models.DecimalField("Q66_21b.  बालीको उत्पादन परिमाण  के जीमा", blank=True, null=True, max_digits=15,
                                  decimal_places=8)
    Q66_21c = models.DecimalField("Q66_21c.  विक्री परिमाण (के जी)", blank=True, null=True, max_digits=15,
                                  decimal_places=8)
    Q66_22a = models.DecimalField("Q66_22a.  बाली लगाएको जग्गाको क्षेत्रफल (बिघामा)", blank=True, null=True,
                                  max_digits=15, decimal_places=8)
    Q66_22a_1 = models.DecimalField("Q66_22a_1. बाली लगाएको जग्गाको क्षेत्रफल (कठ्ठा)", blank=True, null=True,
                                    max_digits=15, decimal_places=8)
    Q66_22a_2 = models.DecimalField("Q66_22a_2. बाली लगाएको जग्गाको क्षेत्रफल (धुर)", blank=True, null=True,
                                    max_digits=15, decimal_places=8)
    Q66_22b = models.DecimalField("Q66_22b.  बालीको उत्पादन परिमाण के जीमा", blank=True, null=True, max_digits=15,
                                  decimal_places=8)
    Q66_22c = models.DecimalField("Q66_22c.  विक्री परिमाण (के जी)", blank=True, null=True, max_digits=15,
                                  decimal_places=8)
    Q66_23a = models.DecimalField("Q66_23a.  बाली लगाएको जग्गाको क्षेत्रफल(बिघामा)", blank=True, null=True,
                                  max_digits=15, decimal_places=8)
    Q66_23a_1 = models.DecimalField("Q66_23a_1. बाली लगाएको जग्गाको क्षेत्रफल (कठ्ठा)", blank=True, null=True,
                                    max_digits=15, decimal_places=8)
    Q66_23a_2 = models.DecimalField("Q66_23a_2. बाली लगाएको जग्गाको क्षेत्रफल (धुर)", blank=True, null=True,
                                    max_digits=15, decimal_places=8)
    Q66_23b = models.DecimalField("Q66_23b.  बालीको उत्पादन परिमाण के जीमा", blank=True, null=True, max_digits=15,
                                  decimal_places=8)
    Q66_23c = models.DecimalField("Q66_23c.  विक्री परिमाण (के जी)", blank=True, null=True, max_digits=15,
                                  decimal_places=8)
    Q66_24a = models.DecimalField("Q66_24a.  बाली लगाएको जग्गाको क्षेत्रफल(बिघामा)", blank=True, null=True,
                                  max_digits=15, decimal_places=8)
    Q66_24a_1 = models.DecimalField("Q66_24a_1. बाली लगाएको जग्गाको क्षेत्रफल (कठ्ठा)", blank=True, null=True,
                                    max_digits=15, decimal_places=8)
    Q66_24a_2 = models.DecimalField("Q66_24a_2. बाली लगाएको जग्गाको क्षेत्रफल (धुर)", blank=True, null=True,
                                    max_digits=15, decimal_places=8)
    Q66_24b = models.DecimalField("Q66_24b.  बालीको उत्पादन परिमाण के जीमा", blank=True, null=True, max_digits=15,
                                  decimal_places=8)
    Q66_24c = models.DecimalField("Q66_24c.  विक्री परिमाण (के जी)", blank=True, null=True, max_digits=15,
                                  decimal_places=8)
    Q66_25a = models.DecimalField("Q66_25a.  बाली लगाएको जग्गाको क्षेत्रफल(बिघामा)", blank=True, null=True,
                                  max_digits=15, decimal_places=8)
    Q66_25a_1 = models.DecimalField("Q66_25a_1. बाली लगाएको जग्गाको क्षेत्रफल (कठ्ठा)", blank=True, null=True,
                                    max_digits=15, decimal_places=8)
    Q66_25a_2 = models.DecimalField("Q66_25a_2. बाली लगाएको जग्गाको क्षेत्रफल (धुर)", blank=True, null=True,
                                    max_digits=15, decimal_places=8)
    Q66_25b = models.DecimalField("Q66_25b.  बालीको उत्पादन परिमाण  के जीमा", blank=True, null=True, max_digits=15,
                                  decimal_places=8)
    Q66_25c = models.DecimalField("Q66_25c.  विक्री परिमाण (के जी)", blank=True, null=True, max_digits=15,
                                  decimal_places=8)
    Q66_26a = models.DecimalField("Q66_26a.  बाली लगाएको जग्गाको क्षेत्रफल(बिघामा)", blank=True, null=True,
                                  max_digits=15, decimal_places=8)
    Q66_26a_1 = models.DecimalField("Q66_26a_1. बाली लगाएको जग्गाको क्षेत्रफल (कठ्ठा)", blank=True, null=True,
                                    max_digits=15, decimal_places=8)
    Q66_26a_2 = models.DecimalField("Q66_26a_2. बाली लगाएको जग्गाको क्षेत्रफल (धुर)", blank=True, null=True,
                                    max_digits=15, decimal_places=8)
    Q66_26b = models.DecimalField("Q66_26b.  बालीको उत्पादन परिमाण के जीमा", blank=True, null=True, max_digits=15,
                                  decimal_places=8)
    Q66_26c = models.DecimalField("Q66_26c.  विक्री परिमाण (के जी)", blank=True, null=True, max_digits=15,
                                  decimal_places=8)
    Q66_27a = models.DecimalField("Q66_27a.  बाली लगाएको जग्गाको क्षेत्रफल(बिघामा)", blank=True, null=True,
                                  max_digits=15, decimal_places=8)
    Q66_27a_1 = models.DecimalField("Q66_27a_1. बाली लगाएको जग्गाको क्षेत्रफल (कठ्ठा)", blank=True, null=True,
                                    max_digits=15, decimal_places=8)
    Q66_27a_2 = models.DecimalField("Q66_27a_2. बाली लगाएको जग्गाको क्षेत्रफल (धुर)", blank=True, null=True,
                                    max_digits=15, decimal_places=8)
    Q66_27b = models.DecimalField("Q66_27b.  बालीको उत्पादन परिमाण के जीमा", blank=True, null=True, max_digits=15,
                                  decimal_places=8)
    Q66_27c = models.DecimalField("Q66_27c.  विक्री परिमाण (के जी)", blank=True, null=True, max_digits=15,
                                  decimal_places=8)
    Q66_28a = models.DecimalField("Q66_28a.  बाली लगाएको जग्गाको क्षेत्रफल(बिघामा)", blank=True, null=True,
                                  max_digits=15, decimal_places=8)
    Q66_28a_1 = models.DecimalField("Q66_28a_1. बाली लगाएको जग्गाको क्षेत्रफल (कठ्ठा)", blank=True, null=True,
                                    max_digits=15, decimal_places=8)
    Q66_28a_2 = models.DecimalField("Q66_28a_2. बाली लगाएको जग्गाको क्षेत्रफल (धुर)", blank=True, null=True,
                                    max_digits=15, decimal_places=8)
    Q66_28b = models.DecimalField("Q66_28b.  बालीको उत्पादन परिमाण के जीमा", blank=True, null=True, max_digits=15,
                                  decimal_places=8)
    Q66_28c = models.DecimalField("Q66_28c.  विक्री परिमाण (के जी)", blank=True, null=True, max_digits=15,
                                  decimal_places=8)
    Q66_29a = models.DecimalField("Q66_29a.  बाली लगाएको जग्गाको क्षेत्रफल(बिघामा)", blank=True, null=True,
                                  max_digits=15, decimal_places=8)
    Q66_29a_1 = models.DecimalField("Q66_29a_1. बाली लगाएको जग्गाको क्षेत्रफल (कठ्ठा)", blank=True, null=True,
                                    max_digits=15, decimal_places=8)
    Q66_29a_2 = models.DecimalField("Q66_29a_2. बाली लगाएको जग्गाको क्षेत्रफल (धुर)", blank=True, null=True,
                                    max_digits=15, decimal_places=8)
    Q66_29b = models.DecimalField("Q66_29b.  बालीको उत्पादन परिमाण  के जीमा", blank=True, null=True, max_digits=15,
                                  decimal_places=8)
    Q66_29c = models.DecimalField("Q66_29c.  विक्री परिमाण (के जी)", blank=True, null=True, max_digits=15,
                                  decimal_places=8)
    Q66_31a = models.DecimalField("Q66_31a.  बाली लगाएको जग्गाको क्षेत्रफल(बिघामा)", blank=True, null=True,
                                  max_digits=15, decimal_places=8)
    Q66_31a_1 = models.DecimalField("Q66_31a_1. बाली लगाएको जग्गाको क्षेत्रफल (कठ्ठा)", blank=True, null=True,
                                    max_digits=15, decimal_places=8)
    Q66_31a_2 = models.DecimalField("Q66_31a_2. बाली लगाएको जग्गाको क्षेत्रफल (धुर)", blank=True, null=True,
                                    max_digits=15, decimal_places=8)
    Q66_31b = models.DecimalField("Q66_31b.  बालीको उत्पादन परिमाण  के जीमा", blank=True, null=True, max_digits=15,
                                  decimal_places=8)
    Q66_31c = models.DecimalField("Q66_31c.  विक्री परिमाण (के जी)", blank=True, null=True, max_digits=15,
                                  decimal_places=8)

    Q67 = models.CharField("Q67. तपाईको परिवारको स्वामित्वमा चौपाया तथा पशुपक्षी के के छन् ?", blank=True, null=True,
                           max_length=200, )
    Q67_1a = models.IntegerField("Q67_1a. कति छ ?", blank=True, null=True)
    Q67_1b = models.IntegerField("Q67_1b. ढुध उत्पादन (लिटर)", blank=True, null=True)
    Q67_1f = models.IntegerField("Q67_1f. हाड/छाला उत्पादन (के जी)", blank=True, null=True)
    Q67_1g = models.IntegerField("Q67_1g. बिक्रीबाट बार्षिक अम्दामी रू", blank=True, null=True)
    Q67_2a = models.IntegerField("Q67_2a. कति छ ?", blank=True, null=True)
    Q67_2b = models.IntegerField("Q67_2b. ढुध उत्पादन (लिटर)", blank=True, null=True)
    Q67_2c = models.IntegerField("Q67_2c. मासु उत्पादन (के जी)", blank=True, null=True)
    Q67_2f = models.IntegerField("Q67_2f. हाड/छाला उत्पादन (के जी)", blank=True, null=True)
    Q67_2g = models.IntegerField("Q67_2g. बिक्रीबाट बार्षिक अम्दामी रू", blank=True, null=True)
    Q67_3a = models.IntegerField("Q67_3a. कति छ ?", blank=True, null=True)
    Q67_3c = models.IntegerField("Q67_3c. मासु उत्पादन (के जी)", blank=True, null=True)
    Q67_3g = models.IntegerField("Q67_3g. बिक्रीबाट बार्षिक अम्दामी रू", blank=True, null=True)
    Q67_5a = models.IntegerField("Q67_5a. कति छ ?", blank=True, null=True)
    Q67_5c = models.IntegerField("Q67_5c. मासु उत्पादन (के जी)", blank=True, null=True)
    Q67_5e = models.IntegerField("Q67_5e. उन उत्पादन (के जी)", blank=True, null=True)
    Q67_5g = models.IntegerField("Q67_5g. बिक्रीबाट बार्षिक अम्दामी रू", blank=True, null=True)
    Q67_6a = models.IntegerField("Q67_6a.  कति छ ?", blank=True, null=True)
    Q67_6c = models.IntegerField("Q67_6c. मासु उत्पादन (के जी)", blank=True, null=True)
    Q67_6d = models.IntegerField("Q67_6d. अन्डा (संख्या)", blank=True, null=True)
    Q67_6g = models.IntegerField("Q67_6g. बिक्रीबाट बार्षिक अम्दामी रू", blank=True, null=True)
    Q67_7a = models.IntegerField("Q67_7a.  कति छ ?", blank=True, null=True)
    Q67_7c = models.IntegerField("Q67_7c. मासु उत्पादन (के जी)", blank=True, null=True)
    Q67_7d = models.IntegerField("Q67_7d. अन्डा (संख्या)", blank=True, null=True)
    Q67_7g = models.IntegerField("Q67_7g. बिक्रीबाट बार्षिक अम्दामी रू", blank=True, null=True)

    Q67_8 = models.CharField("Q67_8. तपाइको परिवारमा माछा, मौरी गरिएको छ", blank=True, null=True, max_length=200,
                             )
    Q67_8a = models.IntegerField("Q67_7a. माछापालन पोखरी संख्या", blank=True, null=True)
    Q67_8b = models.DecimalField("Q67_7b. पोखरीको क्षेत्रफल(हेक्टर )", blank=True, null=True, max_digits=15,
                                 decimal_places=8)
    Q67_8d = models.IntegerField("Q67_7d. बार्षिक उत्पादन(केजि)", blank=True, null=True)
    Q67_8e = models.IntegerField("Q67_7e. मौरी घार संख्याः", blank=True, null=True)
    Q67_8f = models.IntegerField("Q67_7f. बार्षिक मह उत्पादन(केजि)", blank=True, null=True)

    Q68 = models.CharField(
        "Q68. तपाईको परिवारलाई आफ्नो कृषि उत्पादनबाट कति महिना खान पुग्छ ? (आफ्नो परिवारमा खेती गर्ने जमिन भएका तथा अरुको जमिनमा खेती गर्ने परिवारहरुसँग सोध्ने)",
        blank=True, null=True, max_length=200, )
    bechchu_bechdina_choices = [
        ('1', '1. बेच्छु '),
        ('2', '2. बेच्दिन'),
    ]
    Q69 = models.CharField("Q69. तपाईको घरको बाँकी कृषि उत्पादन बजारमा बेच्नुहुन्छ ?", blank=True, null=True,
                           max_length=200,)

    Q69_1 = models.CharField("Q69_1. बेच्नुहुन्छ भने कहाँ बेच्नुहुन्छ ?", blank=True, null=True, max_length=200,
                             )
    Q69_2 = models.IntegerField("Q69_2.तपाइको जग्गा बाजो छ < यदि छ भने कति वर्ष देखि बाजो राख्नु भाको छ ?", blank=True,
                                null=True)
    Q150 = models.CharField("Q150. तपाईले वा परिवारको कुनै सदस्यले कुनै व्यवसाय गर्नु भएको छ", blank=True, null=True,
                            max_length=200, )

    Q150_1 = models.CharField("Q150.1 यदि छ भने क व्यवसाय गर्नु भएको छ", blank=True, null=True, max_length=200,
                              )
    Q150_2 = models.CharField("Q150.e यदि व्यवसाय अन्य भए लेख्नुहोस", blank=True, null=True, max_length=200)
    Q150_3 = models.CharField("Q150.2 व्यवसाय गर्न पान नम्बर लिनु भाको छ ?", blank=True, null=True, max_length=200,
                              )
    Q70_1 = models.IntegerField("Q70_1. खानपान खर्च हुने मासिक औसत खर्च (रुपैयाँ)", blank=True, null=True)
    Q70_2 = models.IntegerField("Q70_2. लाउन (लत्ताकपडा) खर्च हुने मासिक औसत खर्च (रुपैयाँ)", blank=True, null=True)
    Q70_3 = models.IntegerField("Q70_3. औषधी खर्च हुने मासिक औसत खर्च (रुपैयाँ)", blank=True, null=True)
    Q70_4 = models.IntegerField("Q70_4. पढाई (बच्चाहरुको) खर्च हुने मासिक औसत खर्च (रुपैयाँ)", blank=True, null=True)
    Q70_5 = models.IntegerField("Q70_5. ईन्धन खर्च हुने मासिक औसत खर्च (रुपैयाँ)", blank=True, null=True)
    Q70_6 = models.IntegerField("Q70_6. मनोरन्जन खर्च हुने मासिक औसत खर्च (रुपैयाँ)", blank=True, null=True)
    Q70_7 = models.IntegerField("Q70_7. यातायात खर्च हुने मासिक औसत खर्च (रुपैयाँ)", blank=True, null=True)
    Q70_8 = models.IntegerField("Q70_8. चाडपर्व खर्च हुने मासिक औसत खर्च (रुपैयाँ)", blank=True, null=True)
    Q70_9 = models.IntegerField("Q70_9. घरभाडा खर्च हुने मासिक औसत खर्च (रुपैयाँ)", blank=True, null=True)
    Q70_10 = models.IntegerField("Q70_10. कृषि सामाग्री खर्च हुने मासिक औसत खर्च (रुपैयाँ)", blank=True, null=True)
    Q70_11 = models.IntegerField("Q70_11. अन्य खर्च हुने मासिक औसत खर्च (रुपैयाँ)", blank=True, null=True)
    Q70_12 = models.IntegerField("Q70_12. जम्मा खर्च हुने मासिक औसत खर्च (रुपैयाँ)", blank=True, null=True)
    Q71_1 = models.IntegerField("Q71_1. कृषि तथा फलफूल मासिक औसत आम्दानी (रुपैयाँ)", blank=True, null=True)
    Q71_2 = models.IntegerField("Q71_2. व्यापार/व्यवसाय मासिक औसत आम्दानी (रुपैयाँ)", blank=True, null=True)
    Q71_3 = models.IntegerField("Q71_3. सेवा/नोकरी मासिक औसत आम्दानी (रुपैयाँ)", blank=True, null=True)
    Q71_4 = models.IntegerField("Q71_4. ज्याला/मजदुरी मासिक औसत आम्दानी (रुपैयाँ)", blank=True, null=True)
    Q71_5 = models.IntegerField("Q71_5. विप्रेषण (विदेशबाट पठाएको रकम) मासिक औसत आम्दानी (रुपैयाँ)", blank=True,
                                null=True)
    Q71_6 = models.IntegerField("Q71_6. घर भाडा बापत प्राप्त रकम मासिक औसत आम्दानी (रुपैयाँ)", blank=True, null=True)
    Q71_7 = models.IntegerField("Q71_7. उद्योग मासिक औसत आम्दानी (रुपैयाँ)", blank=True, null=True)
    Q71_8 = models.IntegerField("Q71_8. व्याज मासिक औसत आम्दानी (रुपैयाँ)", blank=True, null=True)
    Q71_9 = models.IntegerField("Q71_9. पेन्सन मासिक औसत आम्दानी (रुपैयाँ)", blank=True, null=True)
    Q71_10 = models.IntegerField("Q71_10. सवारी साधन मासिक औसत आम्दानी (रुपैयाँ)", blank=True, null=True)
    Q71_11 = models.IntegerField("Q71_11.पशुपालन", blank=True, null=True)
    Q71_12 = models.IntegerField("Q71_12. अन्य मासिक औसत आम्दानी (रुपैयाँ)", blank=True, null=True)
    Q71_13 = models.IntegerField(
        "Q71_12. जम्मा खर्च हुने मासिक औसत खर्च (रुपैयाँ)=${Q70_12} र     जम्मा मासिक औसत आम्दानी (रुपैयाँ)=",
        blank=True, null=True)

    Q72 = models.CharField("Q72. तपाईको कुल आम्दानीले खर्च धान्न पुग्छ ?", blank=True, null=True, max_length=200,
                           )

    Q73 = models.CharField(
        "Q73. यदि तपाईको परिवारको कुल वार्षिक आम्दानीले विगत १ वर्षमा परिवार धान्न नपुगेको भए, नपुग अवधिको लागि खर्च धान्ने व्यवस्था कसरी मिलाउनुभयो ? (बहुउत्तर सम्भव छ)",
        blank=True, null=True, max_length=200, )
    Q73_1 = models.CharField("Q73_1. अन्य भए खुलाउनुहोस्", blank=True, null=True, max_length=200)

    Q75 = models.CharField("Q75. यदि  ऋण छ भने, कहाँबाट ऋण लिनु भएको हो ?", blank=True, null=True, max_length=200,
                           )
    Q78 = models.CharField(
        "Q78. तपाईको परिवार वा परिवारका सदस्य कुनै सामाजिक समूहको सदस्य वा समुहमा आवद्ध हुनुहुन्छ ? ", blank=True,
        null=True, max_length=200, )

    Q79 = models.CharField("Q79. यदि हुनुहुन्छ भने कस्तो संस्था/समुहमा आबद्व हुनुहुन्छ ? (बहुउत्तर सम्भव छ)",
                           blank=True, null=True, max_length=200, )
    Q80 = models.IntegerField("Q80. यदि हुनुहुन्छ भने प्रतिमहिना कति रकम जम्मा गर्नुहुन्छ ? ", blank=True, null=True)
    Q81_1 = models.CharField("Q81_1. रेडियो", blank=True, null=True, max_length=200, )
    Q81_2 = models.CharField("Q81_2. टेलिभिजन", blank=True, null=True, max_length=200, )
    Q81_3 = models.CharField("Q81_3. केवल लाईन जोडेको", blank=True, null=True, max_length=200,
                             )
    Q81_4 = models.CharField("Q81_4. टेलिफोन/मोबाइल ", blank=True, null=True, max_length=200,
                             )
    Q81_5 = models.CharField("Q81_5. साइकल", blank=True, null=True, max_length=200, )
    Q81_6 = models.CharField("Q81_6. मोटरसाइकल", blank=True, null=True, max_length=200,)
    Q81_7 = models.CharField("Q81_7. कार/जिप/भ्यान", blank=True, null=True, max_length=200, )
    Q81_8 = models.CharField("Q81_8. सोलार", blank=True, null=True, max_length=200, )
    Q81_9 = models.CharField("Q81_9. इन्भर्टर", blank=True, null=True, max_length=200, )
    Q81_10 = models.CharField("Q81_10. जेनेरेटर", blank=True, null=True, max_length=200, )
    Q81_11 = models.CharField("Q81_11. कम्प्युटर", blank=True, null=True, max_length=200, )
    Q81_12 = models.CharField("Q81_12. स्मार्ट फोन", blank=True, null=True, max_length=200, )
    Q81_13 = models.CharField("Q81_13. इन्टरनेट", blank=True, null=True, max_length=200, )
    Q83 = models.CharField("Q83. तपाईको परिवार अन्य स्थानबाट यस नगरपालिकामा बसाई सरेर आएको हो ?", blank=True, null=True,
                           max_length=200,)
    Q84 = models.IntegerField("Q84. यदि हो भने यहां बसोबास गरेको कति बर्ष भयो ?  ", blank=True, null=True)

    Q85 = models.CharField("Q85. कुन स्थानबाट आउनुभएको हो ?", blank=True, null=True, max_length=200,
                           )
    Q85_1 = models.CharField("Q85_1.  नाम उल्लेख गर्नुहोस्", blank=True, null=True, max_length=200)

    Q86 = models.CharField("Q86. यहाँ बसाई सर्नुको कारण के होला ? ", blank=True, null=True, max_length=200,
                           )
    Q86_1 = models.CharField("Q86_1. अन्य भए खुलाउनुहोस्", blank=True, null=True, max_length=200)

    Q89 = models.CharField(
        "Q89. वैदेशिक रोजगारीको कारणले परिवारको कुनै सदस्य विदेशमा बसोबास गर्नुहुन्छ भने सोबाट रेमिटेन्स पाउनुहुन्छ ?",
        blank=True, null=True, max_length=200, )

    Q90 = models.CharField("Q90. वैदेशिक रोजगारीबाट रकम प्राप्त गर्ने गरेको छ भने के को मार्फत पाउनुहुन्छ ?",
                           blank=True, null=True, max_length=200, )

    Q91 = models.CharField(
        "Q91. तपाई वा तपाईको परिवारका सदस्यहरु विरामी हुँदा उपचारको लागि प्राय कहाँकहाँ जानुहुन्छ ?(बहुउत्तर सम्भव छ)",
        blank=True, null=True, max_length=200, )
    Q91_1 = models.CharField("Q91_1. अन्य भए उल्लेख गर्ने", blank=True, null=True, max_length=200)
    Q92 = models.CharField("Q92. तपाई वा तपाईको परिवारको सदस्यहरुलाई नियमित रुपमा स्वास्थ्य परिक्षण गराउने चलन छ ? ",
                           blank=True, null=True, max_length=200, )

    Q93 = models.CharField(
        "Q93. गत १२ महिनामा तपाईको परिवारमा गर्भवती महिलाले नियमित रुपमा तालिम प्राप्त स्वास्थ्यकर्मीहरुबाट स्वास्थ्य जाँच गराउनुभएको छ ?",
        blank=True, null=True, max_length=200, )

    Q94 = models.CharField("Q94. यदि नगराइएको भए, किन स्वास्थ्य जाँच नगराउनु भएको हो ? ", blank=True, null=True,
                           max_length=200, )

    Q95 = models.CharField("Q95. गत १ वर्षमा तपाईको परिवारको महिलाले बच्चा जन्माउनु भएको भए कहाँ जन्माउनुभयो? ",
                           blank=True, null=True, max_length=200, )
    Q98_1 = models.CharField("Q98_1. तपाईको परिवारमा ५ वर्ष मुनिका केटाकेटी छन्?", blank=True, null=True,
                             max_length=200, )
    Q101_1 = models.CharField("Q101_1. ५ वर्ष भन्दा मुनिको वृद्धि अनुगमन र मापन हुन्छ", blank=True, null=True,
                              max_length=200, )
    Q101_2 = models.CharField("Q101_2. गर्भवती महिलाको लागि आइरन चक्की लिने गरेको छ? ", blank=True, null=True,
                              max_length=200, )
    Q101_5 = models.CharField("Q101_5. ६ महिना देखि ५ वर्ष सम्मका बच्चालाई भिटामिन ए खुवाउने गरेको छ?", blank=True,
                              null=True, max_length=200, )
    Q101_6 = models.CharField("Q101_6. १ वर्ष देखि ५ वर्ष सम्मका बच्चालाई  जुकाको औषधी खुवाएको छ ?", blank=True,
                              null=True, max_length=200, )

    Q109_1 = models.CharField("Q109_1. घरयासी", blank=True, null=True, max_length=200, )
    Q109_2 = models.CharField("Q109_2. सामुदायिक/सामाजिक", blank=True, null=True, max_length=200,
                              )
    Q109_3 = models.CharField("Q109_3. घर जग्गा किनबेच", blank=True, null=True, max_length=200, )
    Q110 = models.CharField("Q110. तपाईको परिवारमा महिलाको नाममा चल/अचल सम्पतिहरु छ ?", blank=True, null=True,
                            max_length=200, )

    Q111 = models.CharField("Q111. छ भने कुन सम्पत्तिमा महिला स्वामित्व छ?", blank=True, null=True, max_length=200,
                            )
    Q112 = models.CharField("Q112. तपाईलाई भवन संहिताको बारेमा थाहा छ?", blank=True, null=True, max_length=200,
                            )
    Q114 = models.CharField("Q114. तपाईले घर निर्माण गर्दा नपाबाट अनुमतिपत्र र नक्सापास लिनु भएको छ?", blank=True,
                            null=True, max_length=200, )
    Q114_1 = models.CharField("Q114_1. तपाइँको घर भूकम्प प्रतिरोधी छ?", blank=True, null=True, max_length=200,
                              )
    Q115 = models.CharField("Q115. तपाईको घरछेउमा खुल्ला र सुरक्षित क्षेत्र छ?  ", blank=True, null=True,
                            max_length=200, )

    Q116 = models.CharField("Q116. तपाईको घर प्राकृतिक प्रकोप जस्तै बाढी आदिको जोखिम क्षेत्रमा छ/छैन ?", blank=True,
                            null=True, max_length=200, )
    Q117 = models.CharField(
        "Q117. के तपाईले टि.भि रेडियो लगाएतका सञ्चार माध्यम मार्फत भूकम्प, पहिरो, बाडी आदिकोजोखिम न्युनिकरणका लागि प्रभावकारी सूचना प्राप्त गर्नु भएको छ ?",
        blank=True, null=True, max_length=200, )
    Q118 = models.CharField("Q118. भुकम्प आएको बेला तपाईको घर भित्रका सुरक्षित स्थानहरु पहिचान गर्नु भएको छ ?",
                            blank=True, null=True, max_length=200, )
    Q119 = models.CharField("Q119. के तपाईले आपतकालिन समयमा काम लाग्ने संसाधनहरु जुटाएर राख्नु भएको छ ?", blank=True,
                            null=True, max_length=200, )
    Q127_1 = models.CharField("Q127_. तपाईको घर/ भवनले कुनै समयमा बाडी थामेको छ?", blank=True, null=True,
                              max_length=200, )

    Q129 = models.CharField("Q129.  प्रकोपबाट तपाईको परिवारको कुनै सदस्यको मृत्यु वा घाइते भएको छ?", blank=True,
                            null=True, max_length=200, )
    Q129_1 = models.IntegerField("Q129_1.खडेरी मृत्यु हुनेको संख्या", blank=True, null=True)
    Q129_2 = models.IntegerField("Q129_2.खडेरी घाइते हुनेको संख्या", blank=True, null=True)
    Q129_3 = models.IntegerField("Q129_3.हावाहुरी मृत्यु हुनेको संख्या", blank=True, null=True)
    Q129_4 = models.IntegerField("Q129_4.हावाहुरी घाइते हुनेको संख्या", blank=True, null=True)
    Q129_5 = models.IntegerField("Q129_5.चट्यांग मृत्यु हुनेको संख्या", blank=True, null=True)
    Q129_6 = models.IntegerField("Q129_6. चट्यांग घाइते हुनेको संख्या", blank=True, null=True)
    Q129_9 = models.IntegerField("Q129_9.बाडी मृत्यु हुनेको संख्या", blank=True, null=True)
    Q129_10 = models.IntegerField("Q129_10. बाडी घाइते हुनेको संख्या ", blank=True, null=True)
    Q129_13 = models.IntegerField("Q129_13.आगलागी मृत्यु हुनेको संख्या", blank=True, null=True)
    Q129_14 = models.IntegerField("Q129_14.आगलागी घाइते हुनेको संख्या ", blank=True, null=True)
    Q129_15 = models.IntegerField("Q129_15.भूकम्पबाट मृत्यु हुनेको संख्या", blank=True, null=True)
    Q129_16 = models.IntegerField("Q129_16.भूकम्पबाट घाइते हुनेको संख्या", blank=True, null=True)

    Q130 = models.CharField("Q130. तपाईको घर/भवनमा कुनै समयमा आगो लागेको थियो?", blank=True, null=True, max_length=200,
                            )
    Q131 = models.CharField("Q131. थियो भने कति पटक.....", blank=True, null=True, max_length=200)
    Q132 = models.CharField("Q132. यो क्षेत्रमा कुनै समयमा महामारीको समस्या थियो?", blank=True, null=True,
                            max_length=200, )
    Q133 = models.IntegerField("Q133. महामारीले तपाईको परिवारको कति जना सदस्यलाई असर गरेको थियो?", blank=True,
                               null=True)
    Q135 = models.CharField(
        "Q135. तपाईको परिवारको कुनै सदस्यले विपद व्यवस्थापन, प्राथमिक उपचार, उद्दार को तालिम लिनुभएको छ?", blank=True,
        null=True, max_length=200, )
    instanceID = models.CharField("instanceID", blank=True, null=True, max_length=200)
    KEY = models.CharField("KEY", blank=True, null=True, max_length=200)
    SubmissionDate = models.DateField("SubmissionDate", blank=True, null=True)
    start = models.DateField("Start Date", blank=True, null=True)
    end = models.DateField("End Date", blank=True, null=True)
    phonenumber = models.IntegerField("phonenumber", blank=True, null=True)
    email = models.CharField("email", blank=True, null=True, max_length=200)
    username = models.CharField("username", blank=True, null=True, max_length=200)

    def __str__(self):
        field_values = []
        for field in self._meta.get_fields():
            f = getattr(self, field.name, '')
            field_values.append(str(f))
        return ','.join(field_values)


class Personal(models.Model):

    Ward = models.IntegerField("Ward", blank=True, null=True)
    Q13 = models.CharField(
        "Q13. तपाईको परिवारमा बसोबास गर्ने सदस्यहरुको (पारिवारिक सदस्य बाहेक पनि) नाम परिवारमूलीबाट क्रमैसँग बताउनुहोस्",
        blank=True, null=True, max_length=200)

    Q14 = models.CharField("Q14.परिवार मूलीको के नाता पर्नु हुन्छ ?", blank=True, null=True, max_length=200,
                           )

    Q15 = models.CharField("Q15. लिङ्ग कुन हो ? ", blank=True, null=True, max_length=200, )
    Q15_1 = models.CharField("Q15. तेश्रो लिङ्ग हो ? ", blank=True, null=True, max_length=200)
    Q16 = models.IntegerField(
        "Q16. कति वर्ष पुरा हुनु भयो ?(पुरा भएको वर्ष अंकमा लेख्नुहोस् एक वर्ष पुरा नभए ०० लेख्नुहोस्)", blank=True,
        null=True)
    age_group = models.CharField("के तपाई निश्चित हुनुहुन्छ तेस्रो लिंगी भनेर", blank=True, null=True, max_length=200)

    Q17 = models.CharField("Q17. जात/जाति कुन हो ?", blank=True, null=True, max_length=200, )
    Q17_1 = models.CharField("Q17.1.जात/जाति अन्य भए लेखानुहोस", blank=True, null=True, max_length=200)

    Q18 = models.CharField("Q18. मातृभाषा के हो ? ", blank=True, null=True, max_length=200, )
    Q18_1 = models.CharField("Q18_1. मातृभाषा अन्य भए लेखानुहोस", blank=True, null=True, max_length=200)

    Q19 = models.CharField("Q19.  धर्म के हो ?", blank=True, null=True, max_length=200, )
    Q19_1 = models.CharField("Q19_1. धर्म अन्य भए लेखानुहोस", blank=True, null=True, max_length=200)

    Q20 = models.CharField("Q20. कामदार को रुपमा घर बाहिर जानु भाएको छ कि?", blank=True, null=True, max_length=200,
                           )

    Q21 = models.CharField("Q21. कामदार को रुपमा घर बाहिर जानु भाएको छ भने कुन कम गर्नु हुन्छ", blank=True, null=True,
                           max_length=200, )
    Q21_1 = models.CharField("Q21_1. अन्य (खुलाउने)", blank=True, null=True, max_length=200)

    Q22 = models.CharField("Q22. पढ्न लेख्न जान्नु भएको छ ?", blank=True, null=True, max_length=200,
                           )

    Q23 = models.CharField("Q23. कति पढ्नु भएको छ ? ", blank=True, null=True, max_length=200, )
    Q24 = models.CharField("Q24. हाल स्कुल गईरहनु भएको छ?", blank=True, null=True, max_length=200,
                           )

    Q25 = models.CharField("Q25. हाल स्कूल जाने गर्नु भएको छैन भने के कारणले नजानु भएको", blank=True, null=True,
                           max_length=200, )
    Q25_1 = models.CharField("Q25. हाल स्कूल नजानुको कारणले अन्य (खुलाउने)", blank=True, null=True, max_length=200)
    Q151 = models.CharField("Q151  कुनै प्राबिधिक शिक्षा पढ्नु भएको छ ?", blank=True, null=True, max_length=200,
                            )

    Q151_1 = models.CharField("Q151.1   प्राबिधिक शिक्षा पढ्नु भएको छ भए कुन", blank=True, null=True, max_length=200,
                              )
    Q151_2 = models.CharField("Q151.2  प्राबिधिक शिक्षा पढ्नु भएको अन्य भए लेखनुहोस", blank=True, null=True,
                              max_length=200)
    Q25_2 = models.CharField("Q25.2. जन्म दर्ता गर्नु भएको छ ?", blank=True, null=True, max_length=200,
                             )

    Q25_3 = models.CharField("Q25.3. जन्म दर्ता गर्नु भएको छैन भने किन दर्ता नगर्नु भाको ?", blank=True, null=True,
                             max_length=200, )
    Q25_4 = models.CharField("Q25.4. नागरिकता लिनु भएको छ ?", blank=True, null=True, max_length=200,
                             )
    Q25_5 = models.CharField("Q25.5. नागरिकता लिनु भएको छैन भने किन नलिनुभएको ?", blank=True, null=True, max_length=200,
                             )

    Q26 = models.CharField("Q26. बैवाहिक स्थिति के हो ?", blank=True, null=True, max_length=200, )
    Q27 = models.IntegerField("Q27. बिवाह गर्दाको उमेर कति हो ?", blank=True, null=True)

    Q28 = models.CharField("Q28.  बितेको १२ महिनामा अक्सर के गर्नुहुन्थ्यो", blank=True, null=True, max_length=200,
                           )

    Q29 = models.CharField("Q29. वितेको १२ महिनामा कुनै काम नगर्नुको कारण के हो ? ", blank=True, null=True,
                           max_length=200, )
    Q29_1 = models.CharField("Q29. वितेको १२ महिनामा कुनै काम नगर्नुको कारण  अन्य भए खुलाउनुहोस्", blank=True,
                             null=True, max_length=200)

    Q30 = models.CharField("Q30. विशेष सीप/ तालिम के  छ ?", blank=True, null=True, max_length=200, )
    Q30_1 = models.CharField("Q30. विशेष सीप/ तालिम अन्य भए खुलाउनुहोस्", blank=True, null=True, max_length=200)

    Q30_2 = models.CharField("Q30_2. जनचेतना मुलक तालिम केहि लिनु भएको छ", blank=True, null=True, max_length=200,
                             )
    Q30_3 = models.CharField("Q30_3. अन्य भए खुलाउनुहोस्", blank=True, null=True, max_length=200)
    Q31 = models.IntegerField("Q31. मासिक आम्दानी (रु.अंकमा)", blank=True, null=True)

    Q32 = models.CharField("Q32. कुनै प्रकारको अपाङ्गता छ ?", blank=True, null=True, max_length=200,
                           )
    Q32_1 = models.CharField("Q32_1. अपांगता परिचय पत्र लिनु भएको छ?", blank=True, null=True, max_length=200,
                             )

    Q33 = models.CharField("Q33. अपांगता परिचय पत्र लिनु भएको छ भने कुन", blank=True, null=True, max_length=200,
                           )
    Q126 = models.CharField("Q126. अपांगको हकमा सामाजिक सुरक्षा भत्ता लिने गरेको छ कि छैन? ", blank=True, null=True,
                            max_length=200, )
    Q126_1 = models.CharField("Q127. यदि छैन भने किन? ", blank=True, null=True, max_length=200)
    Q120 = models.CharField("Q120. जेष्ठ नागरिकको हकमा सामाजिक सुरक्षा भत्ता लिने गरेको छ छैन ?", blank=True, null=True,
                            max_length=200, )
    Q121 = models.CharField("Q121. यदि छैन भने किन ?", blank=True, null=True, max_length=200)
    Q122 = models.CharField("Q122. एकल महिलाको हकमा सामाजिक सुरक्षा भत्ता लिने गरेको छ कि छैन?", blank=True, null=True,
                            max_length=200, )
    Q123 = models.CharField("Q123. यदि छैन भने किन ?", blank=True, null=True, max_length=200)
    Q87 = models.CharField("Q87.  छ महिना वा बढी समयको लागि अन्यत्र बसोबास गर्न जानु भएको छ?", blank=True, null=True,
                           max_length=200, )

    Q88_4 = models.CharField("Q88_4. बसोबास किसिम", blank=True, null=True, max_length=200, )

    Q88_5 = models.CharField("Q88_5. बसोबास गर्नुको कारण", blank=True, null=True, max_length=200, )

    Q88_6 = models.CharField("Q88_6. बसाई सराईको स्थान", blank=True, null=True, max_length=200, )
    Q88_6_1 = models.CharField("Q88_6_1. बसाई सराईको स्थान को नाम लेख्नुहोस", blank=True, null=True, max_length=200)
    PARENT_KEY = models.CharField("PARENT_KEY", blank=True, null=True, max_length=200)
    KEY = models.CharField("KEY", blank=True, null=True, max_length=200)

    def __str__(self):
        field_values = []
        for field in self._meta.get_fields():
            f = getattr(self, field.name, '')
            field_values.append(str(f))
        return ','.join(field_values)


class Household_Attribute(models.Model):
    linked_table = models.CharField(default="Household", max_length=100)
    column_category = models.CharField(max_length=500, blank=True, null=True)
    meta_column = models.CharField(max_length=200, unique=True)
    display_name = models.CharField(max_length=500, null=True)
    odk_data_type = models.CharField(max_length=200, null=True)
    choice_list = models.CharField(max_length=200, null=True)
    datatype = models.CharField(max_length=10, null=True, blank=True)
    required = models.CharField(default="False", max_length=10)
    relevant = models.CharField(default="False", max_length=10)

    def __str__(self):
        field_values = []
        for field in self._meta.get_fields():
            f = getattr(self, field.name, '')
            field_values.append(str(f))
        return ','.join(field_values)


class Personal_Attribute(models.Model):
    linked_table = models.CharField(default="Household", max_length=100)
    column_category = models.CharField(max_length=500, blank=True, null=True)
    meta_column = models.CharField(max_length=200, unique=True)
    display_name = models.CharField(max_length=500, null=True)
    odk_data_type = models.CharField(max_length=200, null=True)
    choice_list_name = models.CharField(max_length=200, null=True)
    datatype = models.CharField(max_length=10, null=True, blank=True)
    required = models.CharField(default="False", max_length=10)
    relevant = models.CharField(default="False", max_length=10)

    def __str__(self):
        field_values = []
        for field in self._meta.get_fields():
            f = getattr(self, field.name, '')
            field_values.append(str(f))
        return ','.join(field_values)


class Attribute_choices_list(models.Model):
    linked_table = models.CharField(max_length=100)
    list_name = models.CharField(max_length=500, blank=True, null=True)
    choice_code = models.CharField(max_length=200)
    choice_label = models.CharField(max_length=500)

    def __str__(self):
        field_values = []
        for field in self._meta.get_fields():
            f = getattr(self, field.name, '')
            field_values.append(str(f))
        return ','.join(field_values)


class Report(models.Model):
    order = models.IntegerField(blank=False, null=False)
    chapter= models.CharField(max_length=500, blank=True, null=True)
    section=models.CharField(max_length=500, blank=True, null=True)
    sub_section = models.CharField(max_length=500, blank=True, null=True)
    sub_sub_section = models.CharField(max_length=500, blank=True, null=True)
    description = models.TextField(blank=True, null=True)
    instruction = models.TextField(blank=True, null=True)
    attachment = models.CharField(max_length=500, blank=True, null=True)


    # desc=HTMLField()

    def __str__(self):
        field_values = []
        for field in self._meta.get_fields():
            f = getattr(self, field.name, '')
            field_values.append(str(f))
        return ','.join(field_values)


class Institution(models.Model):
    ward = models.IntegerField(null=True, blank=True)
    catagory = models.CharField(max_length=500, blank=True, null=True)
    type = models.CharField(max_length=500, blank=True, null=True)
    photo = models.CharField(max_length=500, blank=True, null=True)
    chowk = models.CharField(max_length=500, blank=True, null=True)
    name = models.CharField(max_length=500, blank=True, null=True)
    remark = models.CharField(max_length=500, blank=True, null=True)
    Latitude = models.DecimalField("Latitude", blank=True, null=True, max_digits=15, decimal_places=8)
    Longitude = models.DecimalField("Longitude", blank=True, null=True, max_digits=15, decimal_places=8)



    def __str__(self):
        field_values = []
        for field in self._meta.get_fields():
            f = getattr(self, field.name, '')
            field_values.append(str(f))
        return ','.join(field_values)