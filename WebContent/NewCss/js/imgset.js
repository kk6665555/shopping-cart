  
/*KAI WEI ADD JS RIGHT HERE*/
$(document).ready(function(){

//---------------NSA_map國家風景區---------------------------------
   $('.map_dis1').mouseover(function(){
      $('.map_dis1').attr('src','images/1.png');
    });
    $('.map_dis1').mouseout(function(){
      $('.map_dis1').attr('src','images/1.png');
    });

  
    $('.map_dis2').mouseover(function(){
      $('.map_dis2').attr('src','images/22.png');
    });
    $('.map_dis2').mouseout(function(){
      $('.map_dis2').attr('src','images/22.png');
    });

    $('.map_dis3').mouseover(function(){
      $('.map_dis3').attr('src','images/33.png');
    });
    $('.map_dis3').mouseout(function(){
      $('.map_dis3').attr('src','images/33.png');
    });

  
    $('.map_dis4').mouseover(function(){
      $('.map_dis4').attr('src','images/44.png');
    });
    $('.map_dis4').mouseout(function(){
      $('.map_dis4').attr('src','images/44.png');
    });


    $('.map_dis5').mouseover(function(){
      $('.map_dis5').attr('src','images/54.png');
    });
    $('.map_dis5').mouseout(function(){
      $('.map_dis5').attr('src','images/54.png');
    });

     $('.map_dis6').mouseover(function(){
      $('.map_dis6').attr('src','images/6.png');
    });
    $('.map_dis6').mouseout(function(){
      $('.map_dis6').attr('src','images/6.png');
    });

     $('.map_dis7').mouseover(function(){
      $('.map_dis7').attr('src','images/7.png');
    });
    $('.map_dis7').mouseout(function(){
      $('.map_dis7').attr('src','images/7.png');
    });

     $('.map_dis8').mouseover(function(){
      $('.map_dis8').attr('src','images/8.png');
    });
    $('.map_dis8').mouseout(function(){
      $('.map_dis8').attr('src','images/8.png');
    });

      $('.map_dis9').mouseover(function(){
      $('.map_dis9').attr('src','images/9.png');
    });
    $('.map_dis9').mouseout(function(){
      $('.map_dis9').attr('src','images/9.png');
    });


     $('.map_dis10').mouseover(function(){
      $('.map_dis10').attr('src','images/10.png');
    });
    $('.map_dis10').mouseout(function(){
      $('.map_dis10').attr('src','images/10.png');
    });

     $('.map_dis11').mouseover(function(){
      $('.map_dis11').attr('src','images/11.png');
    });
    $('.map_dis11').mouseout(function(){
      $('.map_dis11').attr('src','images/11.png');
    });

     $('.map_dis12').mouseover(function(){
      $('.map_dis12').attr('src','images/12.png');
    });
    $('.map_dis12').mouseout(function(){
      $('.map_dis12').attr('src','images/12.png');
    });

     $('.map_dis13').mouseover(function(){
      $('.map_dis13').attr('src','images/13.png');
    });
    $('.map_dis13').mouseout(function(){
      $('.map_dis13').attr('src','images/13.png');
    });


//----------------NP國家公園------------------------------------------
     $('.NPmap_dis1').mouseover(function(){
      $('.NPmap_dis1').attr('src','images/cj01.png');
    });
    $('.NPmap_dis1').mouseout(function(){
      $('.NPmap_dis1').attr('src','images/cj01.png');
    });

       $('.NPmap_dis2').mouseover(function(){
      $('.NPmap_dis2').attr('src','images/cj02.png');
    });
    $('.NPmap_dis2').mouseout(function(){
      $('.NPmap_dis2').attr('src','images/cj02.png');
    });

    $('.NPmap_dis3').mouseover(function(){
      $('.NPmap_dis3').attr('src','images/cj03.png');
    });
    $('.NPmap_dis3').mouseout(function(){
      $('.NPmap_dis3').attr('src','images/cj03.png');
    });

    $('.NPmap_dis4').mouseover(function(){
      $('.NPmap_dis4').attr('src','images/cj04.png');
    });
    $('.NPmap_dis4').mouseout(function(){
      $('.NPmap_dis4').attr('src','images/cj04.png');
    });
  
    $('.NPmap_dis5').mouseover(function(){
      $('.NPmap_dis5').attr('src','images/cj05.png');
    });
    $('.NPmap_dis5').mouseout(function(){
      $('.NPmap_dis5').attr('src','images/cj05.png');
    });


    $('.NPmap_dis6').mouseover(function(){
      $('.NPmap_dis6').attr('src','images/cj06.png');
    });
    $('.NPmap_dis6').mouseout(function(){
      $('.NPmap_dis6').attr('src','images/cj06.png');
    });


    $('.NPmap_dis7').mouseover(function(){
      $('.NPmap_dis7').attr('src','images/cj07.png');
    });
    $('.NPmap_dis7').mouseout(function(){
      $('.NPmap_dis7').attr('src','images/cj07.png');
    });


    $('.NPmap_dis8').mouseover(function(){
      $('.NPmap_dis8').attr('src','images/cj08.png');
    });
    $('.NPmap_dis8').mouseout(function(){
      $('.NPmap_dis8').attr('src','images/cj08.png');
    });


    $('.NPmap_dis9').mouseover(function(){
      $('.NPmap_dis9').attr('src','images/cj09.png');
    });
    $('.NPmap_dis9').mouseout(function(){
      $('.NPmap_dis9').attr('src','images/cj09.png');
    });

    //HS
 /*
     $('.map_content2 img').mouseover(function(){
        $(this).css('opacity','1');
     })
     $('.HS1').mouseout(function(){
      $(this).css('opacity','0');    });*/
	  
   //HS縣市觀光景點
   
   $(".HS1").hover(
    function() {
      $('.HSmap_dis1').stop().css('visibility', 'visible').animate({"opacity": "1"}, "slow");
    
    },
    function() {
      $('.HSmap_dis1').stop().css('visibility', 'hidden').animate({"opacity": "0"}, "slow");   
  });

  $(".HS2").hover(
    function() {
      $('.HSmap_dis2').stop().css('visibility', 'visible').animate({"opacity": "1"}, "slow");
    },
    function() {
      $('.HSmap_dis2').stop().css('visibility', 'hidden').animate({"opacity": "0"}, "slow");
  });

  $(".HS3").hover(
    function() {
      $('.HSmap_dis3').stop().css('visibility', 'visible').animate({"opacity": "1"}, "slow");
    },
    function() {
      $('.HSmap_dis3').stop().css('visibility', 'hidden').animate({"opacity": "0"}, "slow");
  });

  $(".HS4").hover(
    function() {
      $('.HSmap_dis4').stop().css('visibility', 'visible').animate({"opacity": "1"}, "slow");
    },
    function() {
      $('.HSmap_dis4').stop().css('visibility', 'hidden').animate({"opacity": "0"}, "slow");
  });

    $(".HS5").hover(
    function() {
      $('.HSmap_dis5').stop().css('visibility', 'visible').animate({"opacity": "1"}, "slow");
    },
    function() {
      $('.HSmap_dis5').stop().css('visibility', 'hidden').animate({"opacity": "0"}, "slow");
  });

    $(".HS6").hover(
    function() {
      $('.HSmap_dis6').stop().css('visibility', 'visible').animate({"opacity": "1"}, "slow");
    },
    function() {
      $('.HSmap_dis6').stop().css('visibility', 'hidden').animate({"opacity": "0"}, "slow");
  });

    $(".HS7").hover(
    function() {
      $('.HSmap_dis7').stop().css('visibility', 'visible').animate({"opacity": "1"}, "slow");
    },
    function() {
      $('.HSmap_dis7').stop().css('visibility', 'hidden').animate({"opacity": "0"}, "slow");
  });

     $(".HS8").hover(
    function() {
      $('.HSmap_dis8').stop().css('visibility', 'visible').animate({"opacity": "1"}, "slow");
    },
    function() {
      $('.HSmap_dis8').stop().css('visibility', 'hidden').animate({"opacity": "0"}, "slow");
  });

   $(".HS9").hover(
    function() {
      $('.HSmap_dis9').stop().css('visibility', 'visible').animate({"opacity": "1"}, "slow");
    },
    function() {
      $('.HSmap_dis9').stop().css('visibility', 'hidden').animate({"opacity": "0"}, "slow");
  });

   $(".HS10").hover(
    function() {
      $('.HSmap_dis10').stop().css('visibility', 'visible').animate({"opacity": "1"}, "slow");
    },
    function() {
      $('.HSmap_dis10').stop().css('visibility', 'hidden').animate({"opacity": "0"}, "slow");
  });

   $(".HS11").hover(
    function() {
      $('.HSmap_dis11').stop().css('visibility', 'visible').animate({"opacity": "1"}, "slow");
    },
    function() {
      $('.HSmap_dis11').stop().stop().css('visibility', 'hidden').animate({"opacity": "0"}, "slow");
  });

   $(".HS12").hover(
    function() {
      $('.HSmap_dis12').stop().css('visibility', 'visible').animate({"opacity": "1"}, "slow");
    },
    function() {
      $('.HSmap_dis12').stop().css('visibility', 'hidden').animate({"opacity": "0"}, "slow");
  });

   $(".HS13").hover(
    function() {
      $('.HSmap_dis13').stop().css('visibility', 'visible').animate({"opacity": "1"}, "slow");
    },
    function() {
      $('.HSmap_dis13').stop().css('visibility', 'hidden').animate({"opacity": "0"}, "slow");
  });

   $(".HS14").hover(
    function() {
      $('.HSmap_dis14').stop().css('visibility', 'visible').animate({"opacity": "1"}, "slow");
    },
    function() {
      $('.HSmap_dis14').stop().css('visibility', 'hidden').animate({"opacity": "0"}, "slow");
  });

   $(".HS15").hover(
    function() {
      $('.HSmap_dis15').stop().css('visibility', 'visible').animate({"opacity": "1"}, "slow");
    },
    function() {
      $('.HSmap_dis15').stop().css('visibility', 'hidden').animate({"opacity": "0"}, "slow");
  });

   $(".HS16").hover(
    function() {
      $('.HSmap_dis16').stop().css('visibility', 'visible').animate({"opacity": "1"}, "slow");
    },
    function() {
      $('.HSmap_dis16').stop().css('visibility', 'hidden').animate({"opacity": "0"}, "slow");
  });

   $(".HS17").hover(
    function() {
      $('.HSmap_dis17').stop().css('visibility', 'visible').animate({"opacity": "1"}, "slow");
    },
    function() {
      $('.HSmap_dis17').stop().css('visibility', 'hidden').animate({"opacity": "0"}, "slow");
  });

   $(".HS18").hover(
    function() {
      $('.HSmap_dis18').stop().css('visibility', 'visible').animate({"opacity": "1"}, "slow");
    },
    function() {
      $('.HSmap_dis18').stop().css('visibility', 'hidden').animate({"opacity": "0"}, "slow");
  });

   $(".HS19").hover(
    function() {
      $('.HSmap_dis19').stop().css('visibility', 'visible').animate({"opacity": "1"}, "slow");
    },
    function() {
      $('.HSmap_dis19').stop().css('visibility', 'hidden').animate({"opacity": "0"}, "slow");
  });



   $(".HS20").hover(
    function() {
      $('.HSmap_dis20').stop().css('visibility', 'visible').animate({"opacity": "1"}, "slow");
    },
    function() {
      $('.HSmap_dis20').stop().css('visibility', 'hidden').animate({"opacity": "0"}, "slow");
  });

  $(".HS21").hover(
    function() {
      $('.HSmap_dis21').stop().css('visibility', 'visible').animate({"opacity": "1"}, "slow");
    },
    function() {
      $('.HSmap_dis21').stop().css('visibility', 'hidden').animate({"opacity": "0"}, "slow");
  });

  $(".HS22").hover(
    function() {
      $('.HSmap_dis22').stop().css('visibility', 'visible').animate({"opacity": "1"}, "slow");
    },
    function() {
      $('.HSmap_dis22').stop().css('visibility', 'hidden').animate({"opacity": "0"}, "slow");
  });
  
   //NFRA國家森林遊樂區

    $('#NFRA a').mouseover(function(){
      $(this).children("img").attr('src','UserFiles/map/moveDot.png');
    });
     $('#NFRA  a').mouseout(function(){
      $(this).children("img").attr('src','UserFiles/map/Dot.png');
    });
  //初始直設定....................................................................................................

	var $backgroundImage = $('.backgd');/*國家風景區背景圖*/
    var $backgroundImage2 = $('.np_bg');/*國家公園背景圖*/	
	var $backgroundImage3 = $('.hs_bg');/*觀光景點背景圖*/	
	var $backgroundImage4 = $('.nfra_bg');/*森林遊樂區背景圖*/	
	var $backgroundImage5 = $('.tt_bg');/*觀光小城背景圖*/	
	var $backgroundImage6 = $('.light_bg');/*觀光小城背景圖*/	
	var $backgroundImage7 = $('.rf_bg');/*休閒農場背景圖*/	
    var $mini_pic = $('.mini_pic');
    var $title = $('.title2015');/*標題*/
    var $p1 = $('.p1');/*內文第1段*/
    var $p2 = $('.p2');/*內文第2段*/

  
 //國家森林遊樂區
  $('#NFRA .map_1').click(function(){
    $backgroundImage4.stop().css('background','url(/userfiles/map/NFRA/bg1.jpg) center center');
	$backgroundImage4.stop().css('background-size','cover');
    $title.text('內洞').fadeIn();
    $p1.text('內洞國家森林遊樂區內南勢溪、內洞溪的豐沛水資源，孕育了繁茂的森林、多樣性的動植物的生態外，內洞的瀑布群更是馳名全臺的瀑布，其中信賢瀑布（內洞瀑布）更是經由票選後，大家公認最美的瀑布第一名。 ');
    $p2.text('內洞森林遊樂區內有南勢溪溪水穿梭而過，南側有內洞溪匯流而來，終因攔水壩阻擋，而形成一連串大大小小的山間水瀑。瀑布分為三層，水量豐沛，水勢奔騰壯闊。在瀑布旁的兩側高地上，闢建有規劃完善的觀瀑平臺、休憩座椅及戶外教室，不僅可以悠閒地欣賞飛瀑景觀，更能夠享受陰離子所帶來的身心放鬆之感。此外，烏來著名的觀光臺車已從人力手推轉變為機動化方式，該臺車與內洞遊樂區同樣歸屬林務局管理，原用來運輸林木，現成為遊客遊覽之遊憩設施，從烏來站至瀑布站間有1.6公里，全程搭乘約3-5分鐘，軋軋有聲的行駛樂趣，吸引無數觀光客。').fadeIn();
    $p2.stop().append("<p class='morelink'>更多內容<a href='http://recreation.forest.gov.tw/RA/RA_1_1.aspx?RA_ID=0200002'  target='_blank' > </a></p>");

  });
  $('#NFRA .map_2').click(function(){
    $backgroundImage4.stop().css('background','url(/userfiles/map/NFRA/bg2.jpg) center center');
	$backgroundImage4.stop().css('background-size','cover');
    $title.stop().text('滿月圓').animate({opacity: 1},"slow");
    $p1.stop().text('滿月圓森林遊樂區係因圓圓的山巒狀似滿月而得名，也因為該區地形的落差，使得區內的河谷坡度陡峭，形成不少壯觀的瀑布群。區內多為高山丘陵地，其地形變化由西北向東南漸次升高，區內有蚋仔溪橫貫其中。 ');
    $p2.stop().text('因天然植群完整、林木茂密，各種野生動物繁多，尤以鳥類資源最為豐富。園區中常見中低海拔鳥類出沒，為賞鳥良好去處；另有蝴蝶分佈於蚋仔溪沿線。就整體來說，滿月圓森林遊樂區森林非常優美，不論是天然闊葉樹林或是人工造林，都是進行森林浴、賞鳥、觀瀑、登山的好所在。');
     $p2.stop().append("<p class='morelink'>更多內容<a href='http://recreation.forest.gov.tw/RA/RA_1_1.aspx?RA_ID=0200001'  target='_blank' > </a></p>");

  });
  $('#NFRA .map_3').click(function(){
    $backgroundImage4.css('background','url(/userfiles/map/NFRA/bg3.jpg) center center');
	$backgroundImage4.stop().css('background-size','cover');
    $title.text('觀霧').animate({opacity: 1},"slow");
    $p1.text('觀霧位於新竹縣五峰鄉與苗栗縣泰安鄉交界，境內經常瀰漫雲海、霧氣，又稱為「雲的故鄉」。沿著新竹縣竹東鎮往五峰鄉方向進入，沿途風景優美景色迷人，可觀看忽遠忽近，飄浮不定的雲海展現出大自然的壯觀。 ');
    $p2.text('觀霧遊憩區的海拔高約1,800公尺，是觀賞大霸尖山的最佳起點與必經之處。目前新竹林管處將此規劃為森林遊樂區，建有多條森林步道，可通往樹齡2000多歲的檜山神木、巨木林、瀑布等處，還可觀賞日出、春夏秋冬等自然百景，山林間有許多高山鳥，是賞鳥的好地方，除此之外，區域內孕育了許多全世界臺灣僅有的特有種或瀕臨絕種的動植物資源。');
     $p2.stop().append("<p class='morelink'>更多內容<a href='http://recreation.forest.gov.tw/RA/RA_1_1.aspx?RA_ID=0200004'  target='_blank' > </a></p>");

  }).delay(1000).fadeTo('slow', 1);

  $('#NFRA .map_4').click(function(){
    $backgroundImage4.stop().css('background','url(/userfiles/map/NFRA/bg4.jpg) center center').animate({opacity: 1}, "900");
	$backgroundImage4.stop().css('background-size','cover');
    $title.stop().text('大雪山').animate({opacity: 1},"slow");
    $p1.stop().text('位於臺中市和平區的大雪山國家森林遊樂區，海拔高度2,000多公尺，自然景觀優美，佔地3,963公頃，屬於東勢林區管理處所轄，早年為臺灣中部地區重要的伐木林場。本區涵蓋暖、溫、寒三種森林帶，各有獨特的森林生態體系，孕育了豐富的鳥類生態，極適合健行，觀星賞鳥。 ');
    $p2.stop().text('海拔1,800公尺以下為暖帶林，主要有櫧櫟類、樟楠類闊葉樹，並有少數威氏帝杉和松類植物林相。海拔1,800-2,700公尺為溫帶林，在闊葉樹林中混淆扁柏、紅檜、鐵杉、松類及冷杉等森林群落。海拔2,700公尺以上為寒帶林，以冷杉為主要樹種，混有少數鐵杉及刺柏、玉山杜鵑及玉山劍竹，其間並混有高山白珠樹、玉山繡線菊和臺灣百合，頗為奇景壯觀。 ');
     $p2.stop().append("<p class='morelink'>更多內容<a href='http://recreation.forest.gov.tw/RA/RA_1_1.aspx?RA_ID=0300003'  target='_blank' > </a></p>");

  });
  $('#NFRA .map_5').click(function(){
    $backgroundImage4.css('background','url(/userfiles/map/NFRA/bg5.jpg) center center');
	$backgroundImage4.stop().css('background-size','cover');
    $title.stop().text('武陵').animate({opacity: 1},"slow");
    $p1.stop().text('武陵森林遊樂區跨越臺中市和平區、宜蘭縣大同鄉等縣境，高度變化從1800至3884公尺，區內分布有冷杉、鐵山等原始森林、櫻花、雪景、櫻花鉤吻鮭、瀑布、溪流等景。走在雪山、武陵四秀(品田山、桃山、池有山、喀拉業山)等著名登山路線上，沿線秀麗的白木林、峭壁、斷崖、原始林、冰斗等景觀，令人讚嘆。 ');
    $p2.stop().text('春日櫻花怒放、桃雲李海；夏日暑氣不侵，果蔬甜翠脆；秋日楓紅如醉、松柏挺俊，享有臺灣九寨溝的美譽；冬日白雪讓山峰變了顏色，四季風采繽紛多姿，引人入勝。如此四季變幻的豐富多彩景致，讓這裡足以發展為四季宜人的度假境地。');
     $p2.stop().append("<p class='morelink'>更多內容<a href='http://recreation.forest.gov.tw/RA/RA_1_1.aspx?RA_ID=0300001'  target='_blank' > </a></p>");

   });
  $('#NFRA .map_6').click(function(){
    $backgroundImage4.stop().css('background','url(/userfiles/map/NFRA/bg6.jpg) center center');
	$backgroundImage4.stop().css('background-size','cover');
    $title.stop().text('八仙山');
    $p1.stop().text('八仙山國家森林遊樂區位於臺中市和平區，主峰海拔2,000多公尺，約為八千台尺，因而得名「八仙」，區內森林蒼翠，氣候清爽宜人，十文溪與佳保溪匯流其間，溪水源自深山森林，水質清澈，溪中大小岩石遍佈，處處潺流。自然生態資源豐富且本區於日治時期為本省三大林場之一，擁有濃郁的林業人文風情，是您假日休閒體驗大自然最佳的去處！');
    $p2.stop().text('');
 $p2.stop().append("<p class='morelink'>更多內容<a href='http://recreation.forest.gov.tw/RA/RA_1_1.aspx?RA_ID=0300002'  target='_blank' > </a></p>");

  });
  $('#NFRA .map_7').click(function(){
    $backgroundImage4.stop().css('background','url(/userfiles/map/NFRA/bg7.jpg) center center').animate({opacity: 1}, "900");
	$backgroundImage4.stop().css('background-size','cover');
    $title.stop().text('合歡山').animate({opacity: 1},"slow");
    $p1.stop().text('合歡山森林遊樂區位於海拔2,000多公尺之高山上，其鄰近的山岳有中央山脈、奇萊山脈、南湖大山、雪山山脈等，而合歡山與各山岳群峰並列環伺，氣勢雄偉磅礡。合歡山是臺灣百岳中最容易親近的大山，位於南投縣仁愛鄉與花蓮縣秀林鄉交界處面，山脈、雪景、雲海、高山花卉植物都是區內特色，一年四季的合歡山都很迷人。 ');
    $p2.stop().text('合歡山海拔高度從2000多至3000多公尺，氣候四季分明，常年低溫，景緻變化大，加上交通便利，為觀賞臺灣山岳特有景觀的最佳地點。夏天的合歡山，滿山青翠，到處盛開著野百合、山杜鵑，清爽宜人，是一處理想避暑的勝地。秋天合歡山平添幾分蕭瑟，別有北方風味。嚴冬來臨，瑞雪飛落，賞雪人潮蜂擁而至，整個山嶺晶瑩耀眼。');
 $p2.stop().append("<p class='morelink'>更多內容<a href='http://recreation.forest.gov.tw/RA/RA_1_1.aspx?RA_ID=0300004'  target='_blank' > </a></p>");
  });
  $('#NFRA .map_8').click(function(){
    $backgroundImage4.stop().css('background','url(/userfiles/map/NFRA/bg8.jpg) center center').animate({opacity: 1}, "900");
	$backgroundImage4.stop().css('background-size','cover');
    $title.stop().text('奧萬大').animate({opacity: 1},"slow");
    $p1.stop().text('奧萬大森林遊樂區位於南投縣仁愛鄉霧社東南方，屬於高山河谷地型，面積2,787公頃，為南投林區管理處所轄，海拔高度1,100至2,600公尺，日夜溫差大，擁有「楓葉故鄉」之美譽，是全臺最富名氣的賞楓處，楓紅時節遊人如織。 ');
    $p2.stop().text('紅葉景觀通常出現在冬、春二季，主要是在松楓吊橋的楓樹林、松樹林，跨越萬大北溪兩岸，長約50公尺，站在橋面可以觀賞萬大南、北溪合流景觀及溪谷、森林景色。另一條賞楓步道位於第三停車場至溫泉區之間，全長2,160公尺，沿路地質脆弱，設有步道可通往賞楓景點。 ');
 $p2.stop().append("<p class='morelink'>更多內容<a href='http://recreation.forest.gov.tw/RA/RA_1_1.aspx?RA_ID=0400001'  target='_blank' > </a></p>");
  });
  $('#NFRA .map_9').click(function(){
    $backgroundImage4.stop().css('background','url(/userfiles/map/NFRA/bg9.jpg) center center').animate({opacity: 1}, "900");
	$backgroundImage4.stop().css('background-size','cover');
    $title.stop().text('阿里山').animate({opacity: 1},"slow");
    $p1.stop().text('阿里山國家森林遊樂區，位於嘉義縣阿里山鄉，擁有日出、雲海、晚霞、森林、登山鐵路等阿里山五奇，還有列入保育類的臺灣一葉蘭自然保護區，以及旅遊界人士最愛的阿里山高山茶，三、四月的櫻花季，是阿里山最浪漫的季節。遊樂區東臨玉山山脈，與玉山國家公園相連，北接南投的大山，海拔高度2,216公尺，平均溫度10.6度，氣候宜人，觀光資源極為豐富。  ');
    $p2.stop().text('阿里山森林遊樂區植物景觀有熱、暖、溫三帶，蘊藏豐富的森林資源，尤以檜木名聞中外，漫步林間隨處可見。阿里山還有很多美麗的自然景觀，如吉野櫻、重瓣櫻、山櫻花，每年三月中到四月初的吉野櫻盛開，是阿里山的花季，看櫻花，搭小火車觀日出是一大新奇之體驗。');
 $p2.stop().append("<p class='morelink'>更多內容<a href='http://recreation.forest.gov.tw/RA/RA_1_1.aspx?RA_ID=0500001'  target='_blank' > </a></p>");
  });
  $('#NFRA .map_10').click(function(){
    $backgroundImage4.stop().css('background','url(/userfiles/map/NFRA/bg10.jpg) center center');
	$backgroundImage4.stop().css('background-size','cover');
    $title.stop().text('藤枝');
    $p1.stop().text('藤枝森林遊樂區位於高雄市桃源區寶山里，擁有自然景觀的天然闊葉林，優美的人工林，以雲杉、柳杉與臺灣杉為主，鳥類資源豐富。由於森林蒼鬱，山谷起伏，雲霧瀰漫，望如綠海波濤，因而又名為「森濤」。   ');
    $p2.stop().text('遊客中心步道，從大門口至遊客中心，長580公尺，為柏油路面可供車輛行駛。到藤枝主要就是享受森林浴、登山健行、觀賞樹海、看日出、賞鳥。這是一處自然生態教育極佳的場所，1至4月與10至12月是最好的旅遊季節。');
  $p2.stop().append("<p class='morelink'>更多內容<a href='http://recreation.forest.gov.tw/RA/RA_1_1.aspx?RA_ID=0600001'  target='_blank' > </a></p>");
  });
  $('#NFRA .map_11').click(function(){
    $backgroundImage4.stop().css('background','url(/userfiles/map/NFRA/bg11.jpg) center center');
	$backgroundImage4.stop().css('background-size','cover');
    $title.stop().text('雙流');
    $p1.stop().text('雙流遊樂區海拔高度從150至650公尺，面積約1570公頃，小溪緩緩流過林內的人工林、山谷、瀑布，形成適合戲水的休憩空間，林間植物和鳥類很多，可以安排賞鳥森林浴，水邊的蝴蝶、蜻蜓、蛙類是園區的特色。 ');
    $p2.stop().text('地博石、遊客中心、森林浴場、攔砂壩、休閒桌椅、步道等人文景觀，共同構成戶外登山、賞景、生態教學、賞鳥、森林浴等良好場所。區內的步道有通往雙流瀑布區的景觀步道、森林浴步道與往帽子山區的登山步道。景觀步道由入口區沿溪流至瀑布區步道，雖屬封閉山谷型的溪流生態自然景觀，卻孕育著豐盛的昆蟲、魚類及鳥類等生物群落，而雙流的蝴蝶種類多達130餘種，享有盛名。');
   $p2.stop().append("<p class='morelink'>更多內容<a href='http://recreation.forest.gov.tw/RA/RA_1_1.aspx?RA_ID=0600003'  target='_blank' > </a></p>");
  });
  $('#NFRA .map_12').click(function(){
    $backgroundImage4.stop().css('background','url(/userfiles/map/NFRA/bg12.jpg) center center');
	$backgroundImage4.stop().css('background-size','cover');
    $title.stop().text('墾丁');
    $p1.stop().text('墾丁森林遊樂區位於屏東縣恆春鎮墾丁里公園路，面積約為75公頃，海拔高度約200-300公尺，昔稱「墾丁公園」或「墾丁植物園」，附近原為排灣族龜亞角社之部落。區內廣佈熱帶植物，約有 1000 餘種之多，遍佈隆起珊瑚礁岩，還有經多年風化形成的峽谷、洞穴、鐘乳石、石筍等地形景觀。 ');
    $p2.stop().text('這裡的珊瑚礁群區記載著地質史上百萬年來的地殼運動史，墾丁地區受地殼擠壓，造成陸地上升，速度每年約2至5公厘，頗具學術研究的價值。由珊瑚礁岩形成的天然石筍寶穴，洞深8公尺，裡面盡是年代久遠的鐘乳石，不論直立地面的石筍，還是懸垂穴壁、洞頂的鐘乳石都非常秀麗奇特、晶瑩可愛，為必遊景點。');
   $p2.stop().append("<p class='morelink'>更多內容<a href='http://recreation.forest.gov.tw/RA/RA_1_1.aspx?RA_ID=0600002'  target='_blank' > </a></p>");
  });
    $('#NFRA .map_13').click(function(){
    $backgroundImage4.stop().css('background','url(/userfiles/map/NFRA/bg13.jpg) center center').animate({opacity: 1}, "900");
	$backgroundImage4.stop().css('background-size','cover');
    $title.stop().text('東眼山');
    $p1.stop().text('本區人造的柳杉林已達50年生，林木茂密，森林蒼翠蓊鬱，地形起伏多變，午後雲霧湧集，繚繞於山林間，憑添森林無限的神秘感受。本區保存有過去林業生產木材時期所從事的林業工作的遺跡，它反應了臺灣當時林業與經濟活動的特點和技術，具有重大的歷史價值。 ');
    $p2.stop().text('這些遺址包括：造林紀念石、木炭窯、培育健壯苗木的苗圃、集運木材所使用的索道等等，它能提供您觀賞、考察、知識等方面有很好的體驗與感受。')
   $p2.stop().append("<p class='morelink'>更多內容<a href='http://recreation.forest.gov.tw/RA/RA_1_1.aspx?RA_ID=0200003'  target='_blank' > </a></p>");
  });
  $('#NFRA .map_14').click(function(){
    $backgroundImage4.stop().css('background','url(/userfiles/map/NFRA/bg14.jpg)');
	$backgroundImage.stop().css('background-size','cover');
    $title.text('太平山');
    $p1.text('太平山蘊藏珍貴林木，昔日與阿里山、八仙山並列為臺灣三大林場，如今遺留許多生產作業後的索道、山地軌道、集材機等遺跡。在這裡，可以坐上蹦蹦車，沉浸在森林芬多精的世界，或至薄霧輕攏的翠峰湖畔，傾聽大自然美妙樂章、觀賞多變的生態，或是在清晨欣賞太平山的雲海、日出，迎接美麗的一天。當然，在回家途中，更別錯過鳩之澤翠林幽谷中的迷人湯泉。');
    $p2.text('');
 $p2.stop().append("<p class='morelink'>更多內容<a href='http://recreation.forest.gov.tw/RA/RA_1_1.aspx?RA_ID=0100001'  target='_blank' > </a></p>");
  });
  $('#NFRA .map_15').click(function(){
    $backgroundImage4.stop().css('background','url(/userfiles/map/NFRA/bg15.jpg) center center');
	$backgroundImage4.stop().css('background-size','cover');
    $title.stop().text('池南');
    $p1.stop().text('池南森林遊樂區位於花蓮壽豐鄉池南村，即花蓮市西南方鯉魚潭池畔的山坡上、木瓜溪下游，園區內林木蓊鬱、山景秀麗，至紀念碑涼亭處，可眺望鯉魚潭風光。  ');
    $p2.stop().text('池南森林遊樂區海拔高度140至601公尺，占地100多公頃，以森林產業的展示為主，並有運材索道自海拔170公尺高懸至海拔850公尺，直通大景山及木瓜山，是一般難得見的景觀，偶爾有木材轉運作業。除了靜態的陳列物之外，區內還可看到林業經營的部份實際作業情形。 ');
 $p2.stop().append("<p class='morelink'>更多內容<a href='http://recreation.forest.gov.tw/RA/RA_1_1.aspx?RA_ID=0800002'  target='_blank' > </a></p>");
  });
  $('#NFRA .map_16').click(function(){
    $backgroundImage4.stop().css('background','url(/userfiles/map/NFRA/bg16.jpg) center center');
	$backgroundImage4.stop().css('background-size','cover');
    $title.stop().text('富源');
    $p1.stop().text('富源森林遊樂區位於花蓮縣瑞穗鄉富源村溪側3公里處的山區，面積約190公頃，為臺灣最大的樟樹林遊樂區，以蝴蝶谷及瀑布景觀而聞名，故舊稱「富源蝴蝶谷」。   ');
    $p2.stop().text('富源森林遊樂區海拔高度225至750公尺，最大的特色是有滿坑流谷的蝴蝶，蝶況豐富，經調查計有鳳蝶科、粉蝶科、斑蝶科、蛇目蝶科、蛺路網圖片蝶科、小灰蝶科、弄蝶科等7科，於每年3至8月間飛舞於其間，這就是「蝴蝶谷」的由來。 富源森林遊樂區是由樟樹人工林及天然闊葉林所組成，天然林面積廣闊。遼闊的天然林，當然也是鳥類的最佳棲息地，常見鳥類有朱鸝、臺灣藍鵲、紅山椒、樹鵲、五色鳥、鉛色水鶇、河烏、紅嘴黑鵯等百餘種是旅遊休閒的好去處。 ');
 $p2.stop().append("<p class='morelink'>更多內容<a href='http://recreation.forest.gov.tw/RA/RA_1_1.aspx?RA_ID=0800001'  target='_blank' > </a></p>");
  });
  $('#NFRA .map_17').click(function(){
    $backgroundImage4.stop().css('background','url(/userfiles/map/NFRA/bg17.jpg) center center');
	$backgroundImage4.stop().css('background-size','cover');
    $title.stop().text('向陽');
    $p1.stop().text('向陽原為林務局的工作站，也是向陽山及三叉山的登山口，是前往全臺第二高的高山湖泊嘉明湖必經門戶，這座由隕石撞擊形成之高山湖，被登山界稱為「上帝遺失在人間之藍寶石」。  ');
    $p2.stop().text('向陽國家森林遊樂區位於南橫公路154公里處，海拔標高2,000多公尺，全區面積362公頃，遊樂設施佔13公頃，區內有6條可作森林浴、賞鳥等活動之登山步道，其餘為營林區與景觀保護區，是讓遊客深入中高海拔山區，接觸及體驗另類自然環境之最佳遊憩去處。');
 $p2.stop().append("<p class='morelink'>更多內容<a href='http://recreation.forest.gov.tw/RA/RA_1_1.aspx?RA_ID=0700002'  target='_blank' > </a></p>");
  });
  $('#NFRA .map_18').click(function(){
    $backgroundImage4.stop().css('background','url(/userfiles/map/NFRA/bg18.jpg) center center');
	$backgroundImage4.stop().css('background-size','cover');
    $title.stop().text('知本');
    $p1.stop().text('知本森林遊樂區位於臺東縣卑南鄉溫泉村，知本溪流經森林遊樂區南側，區內山巒疊翠，林木蒼鬱，以鳥類資源最為豐富，是臺東市郊賞鳥的最佳據點。植物則以原生之觀賞花木為主，大片純林，是遊樂區主要的森林景觀。 ');
    $p2.stop().text('園內還設有好漢坡、野餐桌椅、森林步道、榕蔭步道、水流腳底按摩步道等，供遊客享受大自然之樂趣。知本森林遊樂區的第一景為橫跨知本溪上的觀林吊橋，橋長80公尺，橋身漆紅，橋下為知本溪清流及原始粗獷知知峽谷。吊橋下方溪床上，有溫泉露頭，即通稱的「內溫泉」。水流腳底按摩步道是利用林蔭下山溝較緩坡處整理而成的獨特設施，清涼的天然泉水順著凸起的鵝卵石潺潺流下，這是夏日最受歡迎的區域。 ');
 $p2.stop().append("<p class='morelink'>更多內容<a href='http://recreation.forest.gov.tw/RA/RA_1_1.aspx?RA_ID=0700001'  target='_blank' > </a></p>");
  });
  //RF休閒農場
  $('#NFRA .RF_map_1').click(function(){
    $backgroundImage7.stop().css('background','url(/userfiles/map/RF/bg1.jpg)');
	$backgroundImage7.stop().css('background-size','cover');
    $title.stop().text('明池');
    $p1.stop().text('明池森林遊樂區座落在宜蘭縣大同鄉和桃園市復興鄉交界之處，又名「池端」，是一個高山人工湖泊。四周原始森林密佈，終年煙嵐繚繞，景色迷濛曼妙，有「北橫明珠」的美譽，更是一處森林浴的好場所。 ');
    $p2.stop().text('園區內以庭園山水的概念，設計出具有古代風格的建築景觀，另有明池苗圃、苔園、蕨園、森林步道、國父誕辰紀念林園等，且於山坡步道兩旁設有梯形株苗種育培養區，沿著斜坡步道而行，可眺望高山野地美景及細賞各式花卉的自然風貌。');
     $p2.stop().append("<p class='morelink'>更多內容<a href='http://pay.wuling-farm.com.tw/hotel/hotel.php'  target='_blank' > </a></p>");
  
  });
   $('#NFRA .RF_map_2').click(function(){
    $backgroundImage7.stop().css('background','url(/userfiles/map/RF/bg2.jpg)');
	$backgroundImage7.stop().css('background-size','cover');
    $title.stop().text('棲蘭');
    $p1.stop().text('棲蘭森林遊樂區位於北橫和北橫宜蘭支線（台7甲省道）交叉處的大同鄉土場村，距宜蘭市和羅東市約38公里，也是前往太平山和梨山必經之地，梯狀的苗圃以種植柳杉為主，區內有先總統　蔣公行館、花木觀賞區、櫻杏桃海步道、森林浴步道、14項有氧運動設施、小泰山森林遊樂場，而歐式建築造型的棲蘭山莊與林間小木屋，更提供了舒適的住宿設施，來此地更別忘了嚐嚐當地培育養殖的特產猴頭菇。  ').animate({opacity: 1},"3");
    $p2.stop().text('棲蘭神木園區位於棲蘭林道12公里處，是目前宜蘭僅存的紅檜巨木區，區內多為千年以上的參天古木原始林，有51株紅檜、扁柏神木散布其間，而樹名分別依生長年代命名，如：孔子神木、唐太宗神木等，富趣味及教育意義。');
   $p2.stop().append("<p class='morelink'>更多內容<a href='http://pay.wuling-farm.com.tw/hotel/hotel.php'  target='_blank' > </a></p>");

  });
 $('#NFRA .RF_map_3').click(function(){
    $backgroundImage7.stop().css('background','url(/userfiles/map/RF/bg3.jpg)');
	$backgroundImage7.stop().css('background-size','cover');
    $title.stop().text('福壽山');
    $p1.stop().text('福壽山農場原為安置榮民從事農墾之純農業經營型態，配合國家政策及發展休閒農場及觀光遊憩事業。春季賞花，夏季避暑，秋季採果，冬季賞雪，白晝望山嵐，入夜觀星宿是如此引人入勝令人流連之地。 ');
    $p2.stop().text('農場位於梨山後山，相距五公里，以生產各式水果及高冷蔬菜聞名。著名的天池，就在農場腹地內最高處。每年前半年，梅花、櫻花、桃花、梨花、蘋果花以及各式草木花卉，繁花錦簇，色彩繽紛，景色怡人，能居此處者必能延年益壽。每年後半年，就是各種水果相繼成熟時，此地有聞名的水蜜桃、水梨、奇異果、胡桃、梅子、加州李、高冷蔬菜，最特殊珍貴的是此地僅有的蜜蘋果，汁多肉脆，彷彿沾了蜜般，入口無比香甜。住宿含梨山賓館共有二百間各式套房，並有兩個可容納200人之餐廳，確實是旅遊絕佳之去處。').animate({opacity: 1},"slow");
    $p2.stop().append("<p class='morelink'>更多內容<a href='http://www.fushoushan.com.tw/'  target='_blank' > </a></p>");
  });
 $('#NFRA .RF_map_4').click(function(){
    $backgroundImage7.stop().css('background','url(/userfiles/map/RF/bg4.jpg)');
	$backgroundImage7.stop().css('background-size','cover');
    $title.stop().text('清境');
    $p1.stop().text('清境農場在南投縣境內，成立於1961年2月20日，面積約360公頃，是行政院退除役官兵輔導委員會為了安置早年投效疆場的國軍退除役官兵在此從事農墾開發而設置的。清境農場是中橫公路霧社支線往合歡山必經之地。 ');
    $p2.stop().text(' 春季到清境農場，會感覺一片欣欣向榮，桃花、梨花、蘋果花陸續綻放，4月全月採收春茶；牧羊區毛地黃盛開，一片奼紫嫣紅，5月為牧區野菊花及合歡山高山杜鵑盛開季，除了春、夏景緻不同之外，秋、冬的清境又有一番不同景緻，10月的清境農場可以賞楓，一片片落楓散落，踩下去沙沙作響浪漫極了。');
   $p2.stop().append("<p class='morelink'>更多內容<a href='http://www.cingjing.gov.tw/ins.php'  target='_blank' > </a></p>");
  });
$('#NFRA .RF_map_5').click(function(){
    $backgroundImage7.stop().css('background','url(/userfiles/map/RF/bg5.jpg)');
	$backgroundImage7.stop().css('background-size','cover');
    $title.stop().text('嘉義');
    $p1.stop().text('嘉義農場有著白牆紅瓦的北歐風味設計，是農場裡最為醒目的景點之一。農場內種有芒果、枇杷、荔枝、桃、梨等水果，且設有花園、植物園、蘭花大道、森林浴區、跑馬場等多項自然與休閒設施。場內也設有露營烤肉區、福利中心、國民旅社以及農場別墅，可供遊客住宿、渡假。');
    $p2.stop().text('');
  $p2.stop().append("<p class='morelink'>更多內容<a href='http://pay.wuling-farm.com.tw/hotel/hotel.php'  target='_blank' > </a></p>");
  });

 $('#NFRA .RF_map_6').click(function(){
    $backgroundImage7.stop().css('background','url(/userfiles/map/RF/bg6.jpg)');
	$backgroundImage7.stop().css('background-size','cover');
    $title.stop().text('高雄').animate({opacity: 1},"slow");
    $p1.stop().text('高雄休閒農場位於高雄市”美濃區”，一個以臺灣”油紙傘”故鄉享有美名的客家鄉鎮，除了當地獨特的客家民俗文化外，更成為當今南臺灣的旅遊勝地；沿途盡是純樸的農家鄉野景緻，當您佇足凝望，遠處一畦畦綿延的菸田，那彷若綠色裙襬的菸葉，隨風綣綣搖曳，向您招喚著來去感受”美濃的豐華”，體驗一趟樸實、自然的農園鄉土之旅! ');
    $p2.stop().text('高雄休閒農場遊憩面積達8.4公頃，開闊的園區內規劃有餐飲區、住宿區、露營區、烤肉區、果園區、珍禽鳥園區、兒童遊樂區，園區多元植栽愛玉、紅龍果、桑葚、芒果、椰子、波蘿蜜、錫蘭橄欖、蓮霧、相思豆、肉桂等蔬果，將自然環境與農業發展結合成休閒農業，適合全家前來旅遊、露營、烤肉、野餐，親子共遊享受田園之樂的好去處。');
    $p2.stop().append("<p class='morelink'>更多內容<a href='http://www.kaohsiungfarm.com.tw/'  target='_blank' > </a></p>");
  });
 
 $('#NFRA .RF_map_7').click(function(){
    $backgroundImage7.stop().css('background','url(/userfiles/map/RF/bg7.jpg)');
	$backgroundImage7.stop().css('background-size','cover');
    $title.stop().text('武陵').animate({opacity: 1},"slow");
    $p1.stop().text('武陵農場位於臺中市北橫宜蘭支線，民國52年將原屬榮民農墾處的武陵墾區正式改名為武陵農場，農場內阡陌縱橫，種植高山蔬果與青心烏龍茶葉，四季風情不同；春天綻放梅花、櫻花、桃花、梨花、蘋果花與杜鵑花，夏天與秋天則是水蜜桃、梨子與蘋果的採收期，到了冬天，幸運的話，可嚐到雪的滋味。 ').animate({opacity: 1},"3");
    $p2.stop().text('農場北邊聳立著有武陵四秀之稱的品田山、池有山、桃山、喀拉業山，西側有雪山、志佳陽大山，東有羅頁尾山；自萬壽橋進入後，即可聽到大甲溪流域七家灣溪的潺潺水聲，乃國寶魚櫻花鉤吻鮭產地，沿著長達百餘公尺、由柳杉樹夾成的松林小徑而行，盡頭為農場中心，銀色巨獅旁的「醒獅園」三字，乃國畫大師張大千先生所親題。高約50公尺的桃山瀑布又名煙聲瀑布，號稱武陵勝景，可自武陵青年活動中心後側之水泥路，經武陵吊橋而到達，站在桃山山腰上遠眺山谷，武陵農場風光一覽無遺。此外，若由品田山經由北陵脈可到雪山。在群山屏障下，夏季涼爽冬不酷寒，是個四季宜人的渡假勝地。').animate({opacity: 1},"slow");
    $p2.stop().append("<p class='morelink'>更多內容<a href='http://www.wuling-farm.com.tw/'  target='_blank' > </a></p>");
  });
 $('#NFRA .RF_map_8').click(function(){
    $backgroundImage7.stop().css('background','url(/userfiles/map/RF/bg8.jpg)');
	$backgroundImage7.stop().css('background-size','cover');
    $title.stop().text('東河').animate({opacity: 1},"slow");
    $p1.stop().text('東河農場位於花東海岸山脈的泰源幽谷內，是行政院國軍退除役官兵輔導委員會臺東農場所轄分場之一，也是行政院人事行政局特約公務人員渡假中心，區內保存完整的動植物生態及天然景觀，登山健行賞鳥露營均合適。 ').animate({opacity: 1},"3");
    $p2.stop().text('農場座落北源村，為泰源幽谷直達花東縱谷的捷徑的必經關口，區內保有完整的動植物生態及天然景觀，在此登山步行、遠眺泰源幽谷盆地、岩洞岩壁景觀，其寧靜的山野，清新的空氣及清澈的水質，值得遊客前往觀賞。').animate({opacity: 1},"slow");
    $p2.stop().append("<p class='morelink'>更多內容<a href='http://travel.vac.gov.tw/wise/donghe/'  target='_blank' > </a></p>");
  });
  
//國家風景區 ok
$('.map_dis1').click(function(){
    $backgroundImage.stop().css('background','url(images/bga1.jpg) center center');
    $backgroundImage.stop().css('background-size','cover');
    $title.stop().text('北海岸及觀音山');
    $p1.stop().text('北海岸及觀音山國家風景區於103年12月15日擴大納入基隆外木山、情人湖與和平島等景點，擴大後總面積達13,081公頃(陸域面積8,427公頃；海域面積4,654公頃)。北觀風景區主要以人文、特殊的地質地形、海岸景觀等特殊風貌著稱。濱海公路旁的石門洞、野柳岬，經過千萬年海濤和東北季風不斷風化、侵蝕，在許多地質作用與地形演育的交互作用下形成各種奇形怪石。 ');
    $p2.stop().text("野柳女王頭更是世界著名觀光景點，野柳地質公園近年來更以成為世界級地質公園為努力目標。另北海岸也是候鳥遷移必經之地，地處迎風口的北海岸，成為每年東北季風到訪之際，候鳥的避風港，是北臺灣絕佳的賞鳥勝地。觀音山區由淡水口北岸遙望，山形像一座觀音斜臥在淡水河畔，登山望海，加上山間不時有雲氣繚繞，形成靈山勝境。而風景區內有多座古剎，更增添觀音山的靈性，在晨午觀賞潮起潮落，海和江交融，景色宜人。");
    $p2.stop().append("<p class='morelink'>更多內容<a href='http://www.northguan-nsa.gov.tw/'  target='_blank' > </a></p>");

  });
$('.map_dis2').click(function(){
    $backgroundImage.stop().css('background','url(images/bga1.jpg) center center');
	$backgroundImage.stop().css('background-size','cover');
    $title.stop().text('參山');
    $p1.stop().text('參山國家風景區包含獅頭山、梨山、八卦山等3 座風景區，總面積約77,521 公頃，涵蓋田野郊區、鄉間村落及高山區域。區內饒富多變的地形地貌，造就出令人驚艷的特殊景觀；人文方面，融合客家、閩南、賽夏及泰雅等族群，展現多元包容的文化風貌。歷史悠久的名剎古寺、奇岩地形及多條綠蔭步道與自行車道相互串連環繞，形成本區重要觀光特色。優質的谷關溫泉，更是泡湯的最佳選擇。 ');
    $p2.stop().text("本風景區擁有優質農特產，如水蜜桃、蜜蘋果、高冷蔬菜及茶葉等遠近馳名，從獅頭山東方美人茶、梨山福壽長春茶到八卦山松柏長青茶，一路由北往南茶韻飄香；還有原住民風味餐與客家美食，都是來此必嚐的在地好味道。現在請跟著我們一起走進參山，您將會愛上這個平易近人、集萬千風情於一身的美麗新境地。");
    $p2.stop().append("<p class='morelink'>更多內容<a href='  http://www.trimt-nsa.gov.tw/'  target='_blank' > </a></p>");

});
$('.map_dis3').click(function(){
    $backgroundImage.stop().css('background','url(images/bg3.jpg) center center');
	$backgroundImage.stop().css('background-size','cover');
    $title.stop().text('日月潭');
    $p1.stop().text('日月潭位於臺灣本島中央南投縣的魚池鄉，是臺灣最大的淡水湖泊，也是最美麗的高山湖泊。潭面以拉魯島為界，東側形如日輪，西側狀如月鉤，故名日月潭。日月潭周邊特色遊憩包含：埔里桃米地區及頭社活盆地豐富的自然生態之旅、集集車埕地區的鐵道懷舊之旅、原住民邵族與布農的原民特色。 ');
    $p2.stop().text('環潭自行車道總長約30km，因蜿蜒湖畔風景秀麗，途經穿越湖面水上自行車道，獲選為全球十大最美自行車道。近年推動的低碳智慧觀光旅遊，更是結合臺灣好行、纜車、遊湖電動巴士、班船、自行車等交通運輸工具，推出全臺唯一的水陸空3D遊程。日月潭四季的山水之美風姿各異，結合周邊豐富的生態環境，春可賞櫻花、夏可賞螢蝶、秋可聆賞音樂及燦爛煙火交織輝映的饗宴、冬可賞日出等遊程。另由國際知名日本建築師「團紀彥」設計的向山行政暨遊客中心，已於民國100年正式啟用，鄰近的「向山眺望平臺」更是讓遊客可一覽無遺眺望拉魯島。');
    $p2.stop().append("<p class='morelink'>更多內容<a href='http://www.sunmoonlake.gov.tw/'  target='_blank' > </a></p>");

});
$('.map_dis5').click(function(){
      $backgroundImage.stop().css('background','url(images/bg5.jpg) center center');
	$backgroundImage.stop().css('background-size','cover');
    $title.stop().text('雲嘉南濱海');
    $p1.stop().text('「雲嘉南濱海國家風景區」位於臺灣西南濱海，涵括雲林縣、嘉義縣、臺南市等3縣市。以「白色雲嘉南」為推廣核心，白色主軸連結浪漫幸福意象，打造羅曼蒂克大道。雲林四湖、口湖擁有天然小農特產，適合農漁體驗。嘉義東石漁人碼頭有著新穎的北回歸線地標、乘船至外傘頂洲；布袋地區除了品嘗海鮮之外，到好美里3D海洋世界，發揮創意巧思與3D彩繪拍照。 ');
    $p2.stop().text("臺南北門婚紗美地，園區內的戀愛百景裝置藝術與水晶教堂廣受遊客喜愛。北門井仔腳瓦盤鹽田是現存最古老的瓦盤鹽田遺址，除了欣賞美麗的夕陽外，鹽業體驗的環境教育課程適合全家大小。到臺南將軍、七股，可在馬沙溝濱海遊憩區與沙同樂、在臺灣鹽博物館與鹽互動，享受海洋與陽光，好不愜意。");
    $p2.stop().append("<p class='morelink'>更多內容<a href='http://swcoast-nsa.travel/'  target='_blank' > </a></p>");

});
$('.map_dis4').click(function(){
    $backgroundImage.stop().css('background','url(images/bg4.jpg) center center');
	$backgroundImage.stop().css('background-size','cover');
    $title.stop().text('阿里山 ');
    $p1.stop().text('阿里山擁有豐富的自然與人文資源，日出、雲海、森林、鐵道以及原住民文化，塑造出「高山青、澗水藍…」這首耳熟能詳的歌謠被國內外旅人所傳頌，來到這裡旅遊，四季皆可體驗不同的樂趣。而阿里山四大活動中，日出印象音樂會以「高格調、高品質、高海拔」的形式，精采呈現音樂與大自然間的和諧共鳴，成為國人「新年‧迎日出」的「朝聖」首選。 ');
    $p2.stop().text("四季賞螢以生態導覽體驗方式，以正確的態度及方式觀賞螢火蟲及認識阿里山生態，幾乎全年可見螢火蟲蹤跡；夏至235草原音樂會以「清涼、安靜，節能」元素，形塑成阿里山夏季的觀光活動新品牌；神木下婚禮以國際級浪漫旅遊活動，打造成為國內外新人舉行婚禮、蜜月渡假及婚紗拍攝的首選。");
    $p2.stop().append("<p class='morelink'>更多內容<a href='http://www.ali-nsa.net/'  target='_blank' > </a></p>");

  });
$('.map_dis6').click(function(){
   $backgroundImage.stop().css('background','url(images/bg6.jpg) center center');
	$backgroundImage.stop().css('background-size','cover');
    $title.stop().text('西拉雅');
    $p1.stop().text('西拉雅國家風景區位於臺南市嘉南平原東部山區與平原交接處，範圍廣大包含16個鄉鎮市區，因地處山區與平原交接處，又有溪河橫切，呈現不同地形變化，為臺灣重要農產地，四季盛產多樣化的水果與物產，境內還富含地熱地質，是一處渾然天成的地質教室。 ');
    $p2.stop().text('區內有數座聞名遐邇的水庫，例如：曾文水庫、尖山埤水庫、烏山頭水庫、虎頭埤水庫等，為南臺灣重要水資源的重要區域，讓西拉雅成為名副其實的「魚米之鄉」。西拉雅沒有令人震撼的高山大湖，但有可以令人放鬆沈澱的鄉村美景及小農獨特味道，因此我們從一個社區、一個農村、一條旅遊線到整個西拉雅，慢慢的延伸擴展，本著小農種植莊稼的心，深耕西拉雅這片美麗的農村，一步步朝繽紛、浪漫、歡樂的「鄉村旅遊渡假勝地」前進。');
    $p2.stop().append("<p class='morelink'>更多內容<a href='http://www.siraya-nsa.gov.tw/'  target='_blank' > </a></p>");

  });

$('.map_dis7').click(function(){
    $backgroundImage.stop().css('background','url(images/bg7.jpg) center center');
	$backgroundImage.stop().css('background-size','cover');
    $title.stop().text('茂林');
    $p1.stop().text('茂林國家風景區位於臺灣南部高雄市與屏東縣交界處，地形呈南北狹長，境內3 大溪流：荖濃溪、濁口溪、隘寮溪貫穿其間，切割出獨特的地形地貌，境內高山峻嶺、瀑布、峽谷等自然景觀兼具。在高雄市茂林區擁有龍頭山曲流、蛇頭山環流丘等世界級自然景觀，區內「紫蝶幽谷」更被國際旅遊美食聖經《米其林綠色指南》推薦為3 星級必遊景點，每年11 月為數壯觀的紫斑蝶，把茂林妝點的絡繹繽紛，豐富的生態與自然景觀充分展現出茂林旺盛的生命力。 ');
    $p2.stop().text('轄內同時擁有豐富多元的原民人文與藝術資源，魯凱族、排灣族、布農族、拉阿魯哇族等各具特色的傳統祭典與圖騰文化傳說，以及原住民朋友暖暖的人情味，總能吸引遊客想一來再來。茂林國家風景區管理處自民國90 年成立以來，致力於推廣本區觀光資源與人文景觀特色，並積極投入開發旅遊套裝行程，每年配合不同季節，運用當令觀光資源特色辦理各種不同主題活動，春天的「南島族群婚禮」、夏天的「清涼一夏」、秋天的「原鄉豐年祭」、冬天的「山城花語悠遊季」與「雙年賞蝶」系列活動，四季都是精彩可期，璀璨茂林與歡樂無限，將誠摯的邀請您前來鑑賞。');
    $p2.stop().append("<p class='morelink'>更多內容<a href='http://www.maolin-nsa.gov.tw/User/Main.aspx'  target='_blank' > </a></p>");
});
$('.map_dis8').click(function(){
    $backgroundImage.stop().css('background','url(images/bg8.jpg) center center');
	$backgroundImage.stop().css('background-size','cover');
    $title.stop().text('大鵬灣');
    $p1.stop().text('大鵬灣國家風景區包含大鵬灣及小琉球兩大風景特定區。大鵬灣擁有全臺灣第一座開啟式橋樑、G2等級國際賽車場及全臺最大Go-Kart賽車場，遊客們可以在這安全的環境中盡情飆速！此外，來到大鵬灣絕不能錯過搭船賞遊潟湖、大啖鮮蚵，另外可騎乘單車慢遊全國十大經典自行車道之一的「大鵬灣環 灣自行車道」，穿越人工濕地飽覽各式紅樹林、招潮蟹、候鳥。 ');
    $p2.stop().text('除此還有各式各樣的水上娛樂設施可供選擇，像是風浪板、獨木舟、香蕉船、水上摩托車及SUP(立式單槳衝浪板)等。小琉球是臺灣唯一的珊瑚島，島上民宿各異其趣，從東港乘船30分鐘即可擁有出國渡假的感覺，騎著電動車環島享受悠閒的小島風光，還可透過浮潛與不勝枚舉的綠蠵龜共遊在小琉球清澈的海水裡。');
    $p2.stop().append("<p class='morelink'>更多內容<a href='http://www.dbnsa.gov.tw/'  target='_blank' > </a></p>");
});
$('.map_dis9').click(function(){
    $backgroundImage.stop().css('background','url(images/bg9.jpg) center center');
	$backgroundImage.stop().css('background-size','cover');
    $title.stop().text('東北角暨宜蘭海岸 ');
    $p1.stop().text('東北角暨宜蘭海岸國家風景區位於臺灣東北隅，是交通部觀光局所屬第一座國家級風景區，海岸線長102.5公里，陸域北起瑞芳區南雅里，南至南方澳內埤海灘及納入龜山島之範圍，陸域面積12,616公頃，海域面積4,805公頃。轄區內自然景觀資源豐富，蘊藏著人文史蹟與海洋生態、群山層巒，景緻絕美。 ');
    $p2.stop().text('經長時間的地質演變，海岸擁有變化多端的奇岩異石；獨特的地形和氣候條件，展現多樣化的植被群落；山海交織的地理位置，豐富多樣的生態環境，賦予野生動物最佳棲息與繁衍之環境；探索東北角的地質地景、動植物群相、濕地生態、人文采風，諸多特色值得細細品味。大自然賜予東北角暨宜蘭海岸國家風景區得天獨厚、依山傍海的絕美環境，管理處藉此推行許多觀光魅力景點與活動，如福隆國際沙雕藝術季、東北角迎曙光、龍洞遊艇港嘉年華、草嶺古道芒花季、單車逍遙遊，結合「健康、休閒及文化」為樂活旅遊之觀光勝地。');
    $p2.stop().append("<p class='morelink'>更多內容<a href='http://www.necoast-nsa.gov.tw/'  target='_blank' > </a></p>");
});
$('.map_dis10').click(function(){
    $backgroundImage.stop().css('background','url(images/bg10.jpg) center center');
	$backgroundImage.stop().css('background-size','cover');
    $title.stop().text('花東縱谷');
    $p1.stop().text('花東縱谷地處臺灣東部，中央山脈與東部海岸山脈縱貫於花蓮與臺東並構成縱谷地形，因此享有其名。境內有溪流、湖泊及山川大地等地景，花東縱谷產業豐富，充滿果園、茶園、稻田、牧場、金針花田及油菜花田等景觀，在大地上描繪出如詩如畫的景緻，因環境未遭受汙染，花東縱谷富有全臺灣最美麗的淨土之美名。 ');
    $p2.stop().text('原住民文化是花東境內最具代表性的人文文化，富饒的大地孕育了阿美族、布農族、太魯閣族、撒奇萊雅族、賽德克族及卑南族等原住民部落族群。花東縱谷國家風景區管理處為推行觀光，每年舉辦夏至235北回歸線系列活動、單車嘉年華系列活動、溫泉美食季活動、國際飛行傘活動並推動熱氣球嘉年華活動，同時協助部落舉辦各項豐年祭及射耳祭等節慶活動，讓世界看見花東縱谷。');
    $p2.stop().append("<p class='morelink'>更多內容<a href='http://www.erv-nsa.gov.tw/user/main.aspx'  target='_blank' > </a></p>");
});
$('.map_dis11').click(function(){
    $backgroundImage.stop().css('background','url(images/bg11.jpg) center center');
	$backgroundImage.stop().css('background-size','cover');
    $title.stop().text('東部海岸');
    $p1.stop().text('東部海岸國家風景區位於花東海岸，轄區北起花蓮溪口，南到小野柳遊憩區，擁有長達168公里的海岸線。面臨蔚藍的太平洋，背倚壯麗的海岸山脈，還包括秀姑巒溪瑞穗以東的泛舟河段以及綠島等區域。因為自然景觀優美，人文、生態資源豐富，是適合深度旅遊的優質國際級觀光環境！遊客可以享受泛舟、衝浪、賞鯨、潛水之樂，加上海岸線沿線有阿美族、噶瑪蘭族等族群，交織出東海岸迷人、悠閒、豐厚的東海岸生活風格。 ');
    $p2.stop().text('來到東部海岸，您可以選擇自行開車、搭乘臺灣好行或騎乘單車，沿著有最美的「藍色公路」之稱的台11線前進，沿途飽覽臺灣最秀麗的海岸景觀，並感受東海岸部落深厚的文化及悠閒的生活態度。歡迎民眾來到東部海岸，參與精采的年度活動或主題旅遊，選擇部落觀光、運動旅遊、低碳生態之旅等不同模式，盡情暢遊東海岸！');
    $p2.stop().append("<p class='morelink'>更多內容<a href='http://www.eastcoast-nsa.gov.tw/'  target='_blank' > </a></p>");
});
$('.map_dis12').click(function(){
   $backgroundImage.stop().css('background','url(images/bg13.jpg) center center');
	$backgroundImage.stop().css('background-size','cover');
    $title.stop().text('澎湖');
    $p1.stop().text('「晚風輕拂澎湖灣，白浪逐沙灘，沒有椰林綴斜陽，只是一片海藍藍。」"外婆的澎湖灣"這首家喻戶曉的經典歌曲，深刻描繪出澎湖的美麗景色-陽光、沙灘、碧海、藍天，透過優美輕快的旋律，刻劃在每位旅人的心中，是澎湖之美的最佳寫照。 ');
    $p2.stop().text('澎湖開發較臺灣早約四百年，擁有歷史悠久的人文古蹟，得天獨厚之自然景觀，潔淨的沙灘，清澈的海水，於2014年獲得青睞成為「世界最美麗海灣」組織一員，2010年亦獲世界最大旅遊指南出版社─寂寞星球（Lonely Planet）評選推薦為「非去不可」的地方，名列全球「十大秘密島嶼」第七名。節理嶙峋壯麗多樣的世界奇景-玄武岩、先民智慧堆砌的石滬群，均列為「臺灣世界遺產潛力點」，成為國內外最佳休閒渡假島嶼，適合春夏來澎湖「玩水、樂活」，秋冬來澎湖「放空、悠活」。對愛海的外國遊客，飄浮海面的澎湖群島形同世外桃源；對臺灣及大陸，"外婆的澎湖灣"早就將澎湖的美深烙在每個人心中。');
    $p2.stop().append("<p class='morelink'>更多內容<a href='http://www.penghu-nsa.gov.tw/'  target='_blank' > </a></p>");
});
$('.map_dis13').click(function(){
    $backgroundImage.stop().css('background','url(images/bg12.jpg) center center');
	$backgroundImage.stop().css('background-size','cover');
    $title.stop().text('馬祖');
    $p1.stop().text('馬祖，宛如一串天上灑落在閩江口的珍珠，素有「閩東之珠」美稱，島上多為崎嶇山地，有著迷人的山海之美，卻因地理位置的特殊，歷史際遇的巧合，成為海上的堅強堡壘，籠罩於神秘的面紗之中。直至民國81年戰地政務解除，馬祖，始展現獨特風貌於世人面前。 ');
    $p2.stop().text('自然及生態觀光資源得天獨厚的馬祖，除了有網友票選為一生必去的臺灣自然景觀-「藍眼淚」奇景之外，夏季還可以搭船繞行燕鷗保護區，欣賞大鳳頭燕鷗、白眉燕鷗，甚至有機會看到神話之鳥-黑嘴端鳳頭燕鷗。40餘年戰地政務為各島留下許多軍事設施，如坑道、作戰工事、制高點觀測所、據點等，造訪這些過往的軍事據點欣賞令人驚豔的壯麗景色及戰地風情；東湧燈塔及東犬燈塔，搭配著海角絕景，滿載異國風情之美，絕對讓遊客流連忘返；馬祖傳統閩東聚落文化保存當地特有人文氣息與建築，四落水或二落水式紅色屋瓦和厚樸花岡石組成的閩東石頭屋，這些都是具代表性的傳統聚落，慢遊芹壁等聚落，絕對能讓旅人的內心有不一樣的感動。');
    $p2.stop().append("<p class='morelink'>更多內容<a href='http://www.matsu-nsa.gov.tw/'  target='_blank' > </a></p>");
});

//NP國家公園 ok
$('.NPmap_dis1').click(function(){
    $backgroundImage2.stop().css('background','url(images/CJ1.jpg) center center ');
	$backgroundImage.stop().css('background-size','cover');
    $title.stop().text('陽明山');
    $p1.stop().text('陽明山國家公園緊臨台北都會區，全區以大屯火山群彙為主，因火山活動造成的錐狀與鐘狀火山體、火口湖、硫氣孔、地熱與溫泉，具有研究及娛樂價值，受季風影響，植物相兼具高草原、矮草原、闊葉樹林、亞熱帶雨林、雨���生植物群落，孕育臺灣水韭、大屯杜鵑、蝴蝶與鳥類，陽明山公園栽植的櫻花及杜鵑，使本區成為臺北近郊最吸引人的賞花場所。 ');
    $p2.stop().text('春季二、三月是陽明公園傳統的花季，色彩繽紛的各種杜鵑與滿山遍野的緋寒櫻，吸引大批賞花人潮。夏季景色則因西南季風的吹拂、午後雷陣雨的影響，霧雨初晴時，常可在山區覓得「虹橋跨立山谷」的景致。而當秋天來時，芒草展現隨風搖曳的花海；楓紅點綴枝頭，樹葉片片金黃，交織成一幅盛名遠播的「大屯秋色」；冬季的陽明山則因受東北季風影響，山區經常寒風細雨，低溫高濕，雲霧瀰漫。');
    $p2.stop().append("<p class='morelink'>更多內容<a href='http://www.ymsnp.gov.tw/'  target='_blank' > </a></p>");
});
$('.NPmap_dis2').click(function(){
    $backgroundImage2.stop().css('background','url(images/bgc4.jpg) center center ');
	$backgroundImage2.stop().css('background-size','cover');
    $title.stop().text('雪霸');
    $p1.stop().text('雪霸國家公園成立於1992年，北以邊古嚴山至樂山間之稜線為界，東界為大甲溪上游，西以北坑山至小雪山的天然稜線為主，南以宇羅尾山、大甲溪中游為界，地���新竹縣、苗栗縣、臺中市的交界處，是臺灣公告成立的第五座國家公園。  ');
    $p2.stop().text('雪霸國家公園境內高山林立，景觀壯麗，高差達三千多公尺，以雪山為中心，向四週輻射多支稜脈，但見遠近的山稜蜿蜒伸展，層次分明，地勢崇峻，其中雪山與大霸尖山最具代表性。雪山主峰位於雪山山脈的中部，高3,886公尺，為山脈之最高點，是臺灣的第二高峰，與玉山、南湖大山、秀姑巒山、北大武山併稱「臺灣五岳」：臺灣府誌因其「積雪瑩澈光明晴霽望之，輝白如玉」而名為雪山。大霸尖山3,492公尺，有「世紀奇峰」之譽，山容壯麗，與中央尖山、達芬尖山合稱為「臺灣三尖」。');
    $p2.stop().append("<p class='morelink'>更多內容<a href='http://www.spnp.gov.tw/'  target='_blank' > </a></p>");
});
$('.NPmap_dis3').click(function(){
    $backgroundImage2.stop().css('background','url(images/bgc3.jpg) center center ');
	$backgroundImage2.stop().css('background-size','cover');
    $title.stop().text('玉山');
    $p1.stop().text('玉山國家公園位居臺灣中央地帶，為我國第二座國家公園。區內崇山峻嶺，臺灣三千公尺以上百岳名山有三十座位處其中，有氣勢磅礡、雄偉壯麗者，有奇峰俊秀、自成風格者，美不勝收，為一典型的山岳型國家公園。 ');
    $p2.stop().text('由於全園區自海拔3,952公尺的玉山主峰直落至300公尺的拉庫拉庫溪底，氣溫隨著高度上升而遞減，形成溫帶、寒帶兩種氣候型態。除蘊涵有豐富的植物相外，另有豐富的動物及景觀等自然資源孕育其中。園區內豐饒珍貴的自然人文資源屬全民共享，這個環境最重要是給人們一個與大自然接觸的場所，做為心靈休憩、恢復生機的地方，也是留給後世子孫最美好純淨的樂土。');
    $p2.stop().append("<p class='morelink'>更多內容<a href='http://www.ysnp.gov.tw/'  target='_blank' > </a></p>");
});
$('.NPmap_dis4').click(function(){
    $backgroundImage2.stop().css('background','url(images/bgc5.jpg) center center ');
	$backgroundImage2.stop().css('background-size','cover');
    $title.stop().text('台江');
    $p1.stop().text('民國98年成立的台江國家公園，位於臺灣本島西南沿海，陸域縱貫臺南市沿海，跨越七股溪、曾文溪、鹿耳門溪、鹽水溪等四條溪流出海口，包括黑面琵鷺保護區、七股潟湖等區域，面積4,905公頃。 ');
    $p2.stop().text('以多變的海岸沖積地形和古航道為特色，兼具自然、人文歷史及傳統產業的文化景觀，海域部份即漢人先民渡台主要航道中東吉嶼至鹿耳門段為範圍，合計海陸總面積39,310公頃，其大都是位於百年來所稱「台江」範圍內。此外，還有由紅樹林、濕地等構成的自然生態景觀，猶如鑲嵌在臺灣西南沿海的綠寶石。');
    $p2.stop().append("<p class='morelink'>更多內容<a href='http://www.tjnp.gov.tw/'  target='_blank' > </a></p>");
});
$('.NPmap_dis5').click(function(){
    $backgroundImage2.stop().css('background','url(images/bgc6.jpg) center center ');
	$backgroundImage2.stop().css('background-size','cover');
    $title.stop().text('墾丁');
    $p1.stop().text('墾丁國家公園位於屏東縣境內，成立於1984年1月，是我國第一座成立的國家公園，三面環海，同時涵蓋陸域與海域。由於百萬年來地殼運動不斷的作用，陸地與海洋彼此交蝕影響，造就了本區高位珊瑚礁、海蝕地形、崩崖地形等奇特的地理景觀。 ');
    $p2.stop().text('特殊的海陸位置加上熱帶氣候的催化，此孕育出豐富多變的生態樣貌，海岸林帶的植物群落尤其特殊罕見，每年還有大批候鳥自北方飛來過冬，數量之多蔚為奇觀；海底的珊瑚景觀更是繽紛絢麗，為墾丁國家公園妝點出卓絕風貌。南灣、龍鑾潭、貓鼻頭、關山、白砂灣、後壁湖、萬里桐、鵝鑾鼻公園、社頂自然公園等，都是園區內值得一遊的風景點。 ');
    $p2.stop().append("<p class='morelink'>更多內容<a href='http://www.ktnp.gov.tw/'  target='_blank' > </a></p>");
});
$('.NPmap_dis6').click(function(){
    $backgroundImage2.stop().css('background','url(images/bgc7.jpg) center center ');
	$backgroundImage2.stop().css('background-size','cover');
    $title.stop().text('金門');
    $p1.stop().text('福建省金門縣古名浯洲，明、清兩代，科甲鼎盛，名將輩出，鄭成功曾駐軍於此，現代更經歷古寧頭戰役及八二三砲戰。 ');
    $p2.stop().text('金門國家公園面積5745公頃，由內政部營建署金門國家公園管理處管理，分為古寧頭區、太武山區、古崗區、馬山區、復國墩區及烈嶼區，除了戰役紀念史蹟、傳統聚落及文物外，在地質上由花崗片麻岩構成的丘陵地形，自然環境特殊因近大陸邊緣，為候鳥遷徙中繼站，發現199種野鳥，具有研究及解說價值。');
    $p2.stop().append("<p class='morelink'>更多內容<a href='http://www.kmnp.gov.tw/'  target='_blank' > </a></p>");
});

$('.NPmap_dis7').click(function(){
    $backgroundImage2.stop().css('background','url(images/bgc8.jpg) center center ');
	$backgroundImage2.stop().css('background-size','cover');
    $title.stop().text('澎湖南方四島');
    $p1.stop().text('澎湖南方四島位於澎湖南方的東嶼坪嶼、西嶼坪嶼、東吉嶼、西吉嶼合稱澎湖南方四島。於南方四島遺世獨立，加上近幾十年來受到產業結構轉型、交通不便造成物資補給不易等影響，人口逐漸外移，現今島上除了少數居民外，平日少有遊客造訪。 ');
    $p2.stop().text('「澎湖南方四島國家公園」擁有豐富的海陸域生物資源、壯觀的玄武岩地景，具地方特色的傳統建築、聚落與歷史文化，自然與人文資源珍貴而獨特。 ');
    $p2.stop().append("<p class='morelink'>更多內容<a href='http://www.marine.gov.tw/'  target='_blank' > </a></p>");
});
$('.NPmap_dis8').click(function(){
    $backgroundImage2.stop().css('background','url(images/bgc9.jpg) center center ');
	$backgroundImage2.stop().css('background-size','cover');
    $title.stop().text('東沙環礁');
    $p1.stop().text('東沙環礁國家公園擁有我國海域唯一發育完整的環礁，係由珊瑚礁經千萬年的生長堆積而形成，屬於特殊珍貴自然景觀，足以代表國家自然遺產，因此成為我國第七座新設立的國家公園。 ');
    $p2.stop().text('東沙環礁孕育豐富的珊瑚礁生物，也擁有多處古沉船遺蹟，需由國家長期保存；而且東沙環礁位居南海北部，景觀優美，向有「南海之珠」的美譽；東沙環礁又鄰近東亞、東南亞各國，具有許多的海洋文史資料彌足珍貴。');
     $p2.stop().append("<p class='morelink'>更多內容<a href='http://www.marine.gov.tw/'  target='_blank' > </a></p>");

  });
$('.NPmap_dis9').click(function(){
    $backgroundImage2.stop().css('background','url(images/bgc10.jpg) center center ');
	$backgroundImage2.stop().css('background-size','cover');
    $title.stop().text('太魯閣');
    $p1.stop().text('太魯閣國家公園橫跨花蓮、南投及臺中，以雄偉壯麗、幾近垂直的大理岩峽谷景觀聞名。沿著立霧溪的峽谷風景線而行，觸目所及皆是壁立千仞的峭壁、峽谷、連綿曲折的山洞隧道等風光。 ');
    $p2.stop().text('燕子口和九曲洞，是太魯閣峽谷最讓人心動的自然奇觀，也是峽谷最窄的兩段，臨溪側闢有人行步道供遊客漫步欣賞。燕子口對岸大理石峭壁上可見到許多小洞穴，每當春夏之際，常有小雨燕和洋燕在峭壁間穿梭鳴唱，或在洞穴內築巢，故而得名燕子口。而九曲洞「如腸之迴、如河之曲」的隧洞景觀，遊客可沿迴轉曲折的半明半暗路線欣賞峽谷風光。');
    $p2.stop().append("<p class='morelink'>更多內容<a href='http://www.taroko.gov.tw/'  target='_blank' > </a></p>");
});


//TT-----------------------------觀光小城----------------------------------------------------------------------------------------
$('.TT_map_1').click(function(){
    $backgroundImage5.stop().css('background','url(/userfiles/map/TT/bg1.jpg) center center ');
	$backgroundImage5.stop().css('background-size','cover');
    $title.stop().text('新北市瑞芳區');
    $title.stop().append('<p class="subtitle">水金九地區礦山秘境</p>');
    $p1.stop().text('水金九（相似於閩南語讀音「美很久」）這三個字串起了新北市瑞芳區三個美麗的小城鎮「水湳洞」、「金瓜石」與「九份」。水金九就像是臺灣礦業的縮影般，充滿了歷史與人文風情；因採金而繁榮，也因採礦方式的不同，呈現不同的面貌；純樸可愛的水湳洞、高貴幽靜的金瓜石、礦工夜夜笙歌的九份，即使在金礦停採後，亦呈現不同風貌，吸引人們探訪、逐夢。 ');
    $p2.stop().text('其中水湳洞擁有媲美「龐貝古城」的十三層選礦場、交疊著金黃與湛藍的陰陽海以及展現大自然鬼斧神工的「黃金瀑布」；金瓜石獨有的清幽、純樸的小鎮景緻，訴說著對山城無盡的眷戀；而繁華熱鬧的九份老街則蘊藏豐富的人文故事與藝術文化，給予疲憊的旅人無盡的慰藉與癒療，提供一種簡單卻回味無窮的心靈體驗。');
    $p2.stop().append("<p class='morelink'>更多內容<a href='m1.aspx?sNo=0017730&id=A12-00168'  > </a></p>");
});
$('.TT_map_2').click(function(){
    $backgroundImage5.stop().css('background','url(/userfiles/map/TT/bg2.jpg) center center ');
	$backgroundImage5.stop().css('background-size','cover');
    $title.stop().text('臺北市北投區');
     $title.stop().append('<p class="subtitle">北投風華小鎮</p>');
    $p1.stop().text('被美國紐約時報旅遊版網站推崇是臺灣溫泉天堂的「北投」，擁有豐富的自然資源、濃厚的歷史文化，是臺北市著名的旅遊勝地，其幅員涵蓋北投溫泉、陽明山國家公園、關渡風景區等。 ');
    $p2.stop().text('北投得天獨厚的環境，在時代潮流的需求與思古溯源的探尋下，發展為觀光休閒的熱門景點，除了北投溫泉博物館、北投文物館、梅庭等豐富的古蹟人文景點，還有林立的溫泉特色旅館，加上直達的捷運系統、全臺第一座綠建築圖書館及獨一無二的溫泉彩繪捷運列車等加持下，於2011年相繼獲得米其林綠色三星城鎮及美國福斯新聞網的推薦，讓北投成為臺灣最具特色的觀光小城。');
    $p2.stop().append("<p class='morelink'>更多內容<a href='m1.aspx?sNo=0017730&id=A12-00169'  > </a></p>");
});
$('.TT_map_3').click(function(){
    $backgroundImage5.stop().css('background','url(/userfiles/map/TT/bg3.jpg) center center ');
	$backgroundImage5.stop().css('background-size','cover');
    $title.stop().text('桃園市大溪鎮');
        $title.stop().append('<p class="subtitle">大溪總統鎮</p>');
    $p1.stop().text('大溪，擁有令人緬懷及深具歷史意義的兩蔣文化，好多故事等待遊客來發掘。有百年風華、耐人尋味的小鎮風情，古早味的建築、古道、民俗表演、木器與小吃，召喚旅人們細細來品味。更有如詩如畫的自然山水風光，結合現代休憩設施與景點，讓人身心完全舒暢，流連忘返。 ');
    $p2.stop().text('此外，自古即為交通樞紐的大溪是北橫起點與多條主要道路的匯集，從大溪出發，可同時體驗多元族群文化、不同觀光特色，並方便國際觀光客進出。2011年出版的米其林旅遊指南，以跨2頁篇幅介紹大溪，並將其評鑑為2顆星推薦（Recommended）景點，可見當地深具吸引國際觀光客的潛力。您心動了嗎？趕緊來大溪吧，讓它獨特的文化與風格，成為你一生難忘的感動和回憶。');
    $p2.stop().append("<p class='morelink'>更多內容<a href='m1.aspx?sNo=0017730&id=A12-00161'  > </a></p>");
});
$('.TT_map_4').click(function(){
    $backgroundImage5.stop().css('background','url(/userfiles/map/TT/bg4.jpg) center center ');
	$backgroundImage5.stop().css('background-size','cover');
    $title.stop().text('苗栗縣三義鄉');
     $title.stop().append('<p class="subtitle">三義木雕藝術城</p>');
    $p1.stop().text('苗栗縣在「調整觀光行銷策略，創造新興商機」政策方向下，以「讓世界看見苗栗」為目標，推動7大旅遊路線及3大國際觀光軸線，並正以「三義木雕藝術城」為苗栗國際觀光旗艦景區，拔尖推動三義為「臺灣國際觀光的新亮點」。 ');
    $p2.stop().text('「臺灣三義」以鮮明的木雕藝術主題、臺灣唯一的木雕產業聚落、便捷的交通網絡、國際知名的旅遊景點、多樣有趣的旅遊體驗、熱情好客的旅遊接待及配合度高的觀光投入，持續提升國際觀光服務能力，傳承與創新這一處代表臺灣最重要的觀光寶地，將「木雕產業特色觀光」推廣到全世界。');
    $p2.stop().append("<p class='morelink'>更多內容<a href='m1.aspx?sNo=0017730&id=A12-00151'  > </a></p>");
});
$('.TT_map_5').click(function(){
    $backgroundImage5.stop().css('background','url(/userfiles/map/TT/bg5.jpg) center center ');
	$backgroundImage5.stop().css('background-size','cover');
    $title.stop().text('臺中市大甲區');
     $title.stop().append('<p class="subtitle">大甲區媽祖文化</p>');
    $p1.stop().text('大甲擁有許多獨特的自然資源－大甲溪、大安溪、鐵砧山、匠師的故鄉與松柏港等，民俗慶典與歷史文化亦為本區特色之一。如大甲街有鎮瀾宮為原漢共同建造的廟宇，每年3月大甲媽祖遶境進香活動吸引百萬人以上共襄盛舉，已名列世界三大宗教慶典活動之一 。 ');
    $p2.stop().text('貞節牌坊歌泣訴說弱女子救城民的故事；文昌祠祿位展現鄉紳為教育的付出。有多種農特產享富名氣，如連續三年贏得「經典好米」、吉園圃的優質苦瓜、大甲粉蔥、方型西瓜。此外鐵砧山有明鄭撫番留存的劍井、歷史古蹟的日南火車站、大安溪陸橋、大甲帽蓆、糕餅等等，皆值得介紹給國內外人士。並結合人文、歷史、古蹟、生態與觀光遊憩資源等產業，引領遊客重溫大甲的歷史記憶與深情故事。');
    $p2.stop().append("<p class='morelink'>更多內容<a href='m1.aspx?sNo=0017730&id=A12-00163' > </a></p>");
});
$('.TT_map_6').click(function(){
    $backgroundImage5.stop().css('background','url(/userfiles/map/TT/bg6.jpg) center center ');
	$backgroundImage5.stop().css('background-size','cover');
    $title.stop().text('彰化縣鹿港鎮');
    $title.stop().append('<p class="subtitle">鹿港鎮工藝、美食、古蹟</p>');
    $p1.stop().text('鹿港曾是臺灣中部的經濟交通樞紐，俗諺「一府二鹿三艋舺」，說明了鹿港當年璀燦的黃金歲月。由於鹿港是座文化的古都，人文薈萃，商業繁盛，清朝時期更因為貿易港口具通商之便，百貨充盈，經濟繁榮，飲食之美自然高人一籌，且因匯聚各地移民，也帶來許多不同口味的鄉土小吃。 ');
    $p2.stop().text('除味美的海鮮外，更有各式的糕餅與風味獨特的鄉土小吃，拜訪鹿港，除參觀古蹟、景點，領畧工藝之美外，品嚐各式美食更是不容錯過，一次鹿港之旅，達到精美、知識與口腹多重的滿足，滿載而歸。鹿港與臺中市、南投縣成為中臺灣觀光「金三角」，更是觀光客旅遊中臺灣的必訪景點。');
    $p2.stop().append("<p class='morelink'>更多內容<a href='m1.aspx?sNo=0017730&id=A12-00172' > </a></p>");
});
$('.TT_map_7').click(function(){
    $backgroundImage5.stop().css('background','url(/userfiles/map/TT/bg7.jpg) center center ');
	$backgroundImage5.stop().css('background-size','cover');
    $title.stop().text('南投縣集集鎮').animate({opacity: 1},"slow");
      $title.stop().append('<p class="subtitle">火車印象、踩風集集</p>');
    $p1.stop().text('當金色陽光點點、灑照綠色隧道，路上遊人悠閒自在地漫、慢騎著「卡打車」，追著火車、迎著風，美好的田園景色一路相隨，何等逍遙。集集鎮迷人的萬種風情就此展開它全國無可抵擋的特色觀光魅力！ ');
    $p2.stop().text('嘈雜、喧囂的轟轟車聲，你厭倦了嗎？煩燥、鬰卒的心靈，你想拋離嗎？集集小鎮的悠閒自在、寧靜舒適的綠色氛圍，絕對能貼近你、擁抱你的心海。悠久的古蹟車站、自然景觀、美食特產，無不融合深度內涵的人文氣息，形塑集集鎮為全國獨一無二的觀光文化小鎮旗艦地位！這個人人心中的觀光休閒天堂夢，只有集集，才能圓夢。來集集搭火車、踩單車，享受綠色的自然魅力風情，是你無法拒絕的誘惑！');
    $p2.stop().append("<p class='morelink'>更多內容<a href='m1.aspx?sNo=0017730&id=A12-00167'   > </a></p>");
});
$('.TT_map_8').click(function(){
    $backgroundImage5.stop().css('background','url(/userfiles/map/TT/bg8.jpg) center center ');
	$backgroundImage5.stop().css('background-size','cover');
    $title.stop().text('臺南市安平');
    $title.stop().append('<p class="subtitle">臺灣之名源自安平</p>');	
    $p1.stop().text('安平古稱「大員」，是臺灣名稱的由來，不僅有豐富史蹟可供臺灣人尋根，遊客來此可賞夕陽，可夜遊，可觀景，可看海，也可大啖美食。安平知名古蹟眾多，安平古堡、億載金城、安平樹屋早已是知名景點，來此非得前往一遊不可。 ');
    $p2.stop().text('其他如東興洋行、海山館、德記洋行、安平小砲台等，也都有豐富的歷史背景及各具特色的建築風貌，分別呈現荷據、明鄭、清朝、日治等不同時期所遺留下來的歷史足跡。臺灣三百多年來最精彩的歷史，皆化作優美的古蹟，留存在安平的結構之中。品嚐安平小吃，更是遊客到安平不容錯過的節目，蝦餅、豆花、蜜餞、蝦捲、蚵捲、魚丸湯、蚵仔煎等美食，多得令人目不暇給。延平老街附近也變身為觀光特產區，可以滿足遊客血拼的慾望，總而言之，來一趟安平，一定讓你滿載而歸。');
    $p2.stop().append("<p class='morelink'>更多內容<a href='m1.aspx?sNo=0017730&id=A12-00162' > </a></p>");
});
$('.TT_map_9').click(function(){
    $backgroundImage5.stop().css('background','url(/userfiles/map/TT/bg9.jpg) center center ');
	$backgroundImage5.stop().css('background-size','cover');
    $title.stop().text('高雄市美濃區');
     $title.stop().append('<p class="subtitle">美濃美意情濃</p>');
    $p1.stop().text('美麗的南方客家小鎮—美濃，曾獲得天下雜誌和臺灣交通部觀光局等單位舉辦「微笑之鄉」網路調查，十萬名網友票選分數最高，它以深厚的客家文化、農村景致與淳樸誠懇的居民，吸引著喜愛追尋不同旅遊體驗的人們到這裡來感受最豐富的客家文化與生活方式。');
    $p2.stop().text('');
	$p2.stop().append('<h2>美麗大地．人情意濃</h2><p>客家人對於土地的深刻情感，體現在保護家園的自然生態上。在這裡人與自然共生共存，可以近距離地親近蝴蝶、鳥類等自然生態。</p><h2>生活體驗．文化客庄</h2><p>美濃是全臺客家文化保存最完整的其中一區，走進美濃小鎮，參與居民們的生活，是體驗客庄原味最好的方式。</p><h2>好山好水．豐富物產</h2><p>美濃有著好水質與好環境，讓米、蔬菜、水果的品質優良，結合客家飲食文化發展出在地專有必嚐美食。</p><h2>多元呈現．人文藝術</h2><p>向來重視教育與文化的客家人，讓美濃更多了一份濃濃的人文氣息，展現在美濃地區隨處可見的日常生活當中，來到這裡可以看到傳統之外的創新客家面貌。這裡涵蓋了人文、歷史與自然景觀的特色，具備多元豐富的觀光資源，非常值得旅客走訪實際體驗客庄生活。</p>');
    $p2.stop().append("<p class='morelink'>更多內容<a href='m1.aspx?sNo=0017730&id=A12-00164' > </a></p>");
});
$('.TT_map_10').click(function(){
    $backgroundImage5.stop().css('background','url(/userfiles/map/TT/bg10.jpg) center center ');
	$backgroundImage5.stop().css('background-size','cover');
    $title.stop().text('臺北市信義區');
    $title.stop().append('<p class="subtitle">信義時尚之城</p>');
    $p1.stop().text('信義區，一座全臺灣最與眾不同的觀光城區，是用信義計畫夢想藍圖打造的城區，也是全臺代表時尚潮流、夢想創造、充滿活力的時尚之城。 ');
    $p2.stop().text('擁有便捷的城際轉運站、雲集全臺最多國際品牌的精品百貨、全臺最大的誠品書店、最具國際知名度的臺北101大樓、眷村再造的四四南村、文創旗艦的松山文創園區、以及國際知名的米其林星級餐廳，更有國際級大師打造的迷人建築景觀及裝置藝術品，和全臺最HIGH的跨年晚會，都讓信義區發散出最璀璨的星光魅力。聚集全臺最完善與時尚的逛街購物、娛樂、品嚐美食、藝文表演及國際會展環境。');
    $p2.stop().append("<p class='morelink'>更多內容<a href='m1.aspx?sNo=0017730&id=A12-00170' > </a></p>");
});
$('.TT_map_11').click(function(){
    $backgroundImage5.stop().css('background','url(/userfiles/map/TT/bg11.jpg) center center ');
	$backgroundImage5.stop().css('background-size','cover');
    $title.stop().text('宜蘭縣礁溪');
    $title.stop().append('<p class="subtitle">溫泉養生樂活小城</p>');
    $p1.stop().text('礁溪鄉有全國唯一的平地溫泉資源，交通可及性極佳，鄉內自然景觀資源極為優質，觀光產業發達，地方政府大力投入預算，建置各項軟、硬體設施，建構更為友善的旅遊環境，為觀光遊憩事業之發展奠定良好基礎。礁溪鄉以其天然資源及地理區位優勢，加以公部門推動觀光事業發展之決心，極具競爭力，也是最值得推薦給國人的城市。');
    $p2.stop().text('');
    $p2.stop().append("<p class='morelink'>更多內容<a href='m1.aspx?sNo=0017730&id=A12-00165' > </a></p>");
});
$('.TT_map_12').click(function(){
    $backgroundImage5.stop().css('background','url(/userfiles/map/TT/bg12.jpg) center center ');
	$backgroundImage5.stop().css('background-size','cover');
    $title.stop().text('花蓮縣瑞穗鄉').animate({opacity: 1},"slow");
    $title.stop().append('<p class="subtitle">茶香、乳香、溫泉香</p>');
    $p1.stop().text('瑞穗鄉擁有極為多元豐富的物產、文化、旅遊資源，可以滿足各種旅遊需求，而悠閒怡然的東部生活步調，更在這裡被發揮的淋漓盡致。 ');
    $p2.stop().text('想要體驗最花蓮的休閒在地生活，那您一定要來瑞穗，我們匯集了東部最精華的旅遊機能。在這個方圓不過135公里的珍珠小鎮，不過幾步路的距離，您就可以品味最香濃的牛奶、咖啡、茶等飲品、享受最養生的溫泉之旅、品嘗最多元的特色美食、體驗最原始的部落生活、投入最刺激的泛舟、參與原鄉和客家的祭典、聆聽最震撼人心的鼓王爭霸，如此多元化的旅遊特色，只有在瑞穗；瑞穗還有更多充滿魅力的自然風景及人文節慶值得您來一探究竟；不必舟車勞頓，你就能體驗到最濃厚的花東在地休閒生活氣息。');
    $p2.stop().append("<p class='morelink'>更多內容<a href='m1.aspx?sNo=0017730&id=A12-00171' > </a></p>");
});
$('.TT_map_13').click(function(){
    $backgroundImage5.stop().css('background','url(/userfiles/map/TT/bg13.jpg) center center ');
	$backgroundImage5.stop().css('background-size','cover');
    $title.stop().text('金門縣金城鎮');
    $title.stop().append('<p class="subtitle">金城鎮後浦古樸小鎮</p>');
    $p1.stop().text('後浦小鎮沉澱六、七百年的人文歷史，是金門政治和經濟的首善之區；豐富的文化古蹟有說不完的過往傳奇，閩南文化、僑鄉文化及戰地文化的時代縮影，穿梭這座城市街道帶您走過歷史的長廊。 ');
    $p2.stop().text('河、海、港、市的優良地理環境位置，交織成動人的生命樂章，倘佯在湖光山色的大自然，或者放鬆心情親近大海，賞鳥逐浪在這裡都已經不算奢侈的人生享受。面對如此精巧美麗的古樸小鎮，友善是我們誠摯的說帖，打開島嶼的人文印象，後浦永遠敞開胸懷歡迎您！');
    $p2.stop().append("<p class='morelink'>更多內容<a href='m1.aspx?sNo=0017730&id=A12-00166'> </a></p>");
});



 //HS觀光景點--------------------------------------------------------------------------------------------------------------------------------------------
$('.HS1').click(function(){
    $backgroundImage3.stop().css('background','url(/userfiles/map/HS/bg40.jpg) center center');
	$backgroundImage3.stop().css('background-size','cover');
    $title.stop().text('臺北市');
    $p1.stop().text('臺北市是臺灣最大的都市。也是政治、經濟、文化的中心。臺北的整體發展相當活潑多元，充滿朝氣。建築形式相當豐富，現代的、古代的都有。因此，喜歡古蹟的，不可錯過大稻埕的迪化街、艋舺的龍山寺，可以欣賞老師傅們的精雕細鑿，匠心美塑。喜歡古物的，不可錯過五千年文化珍藏的寶庫--故宮博物院、歷史博物館。');
    $p2.stop().text('');
    $p2.stop().append("<p class='morelink'>更多內容<a href='m1.aspx?sNo=0001090'> </a></p>");
});
$('.HS2').click(function(){
    $backgroundImage3.stop().css('background','url(/userfiles/map/HS/bg.jpg) center center');
	$backgroundImage3.stop().css('background-size','cover');
    $title.stop().text('基隆市');
    $p1.stop().text('基隆位於臺灣北部，三面環山，僅北面一處有少量平原迎向大海，即為深水谷灣之基隆港。 港灣深入市區，水面寬闊，集商港、軍港、漁港於一身，為進入北臺灣門戶。');
    $p2.stop().text('');
    $p2.stop().append("<p class='morelink'>更多內容<a href='m1.aspx?sNo=0001105' > </a></p>");
});
$('.HS3').click(function(){
    $backgroundImage3.stop().css('background','url(/userfiles/map/HS/bg41.jpg) center center');
	$backgroundImage3.stop().css('background-size','cover');
    $title.stop().text('新北市');
    $p1.stop().text('新北市是臺灣最北的都市，環繞整個臺北市，總面積達二千多平方公里，海岸線長達120餘公里，幅員遼闊，新北市的東北、北部、西北部均臨海，市內北海岸與東北角海岸擁有豐富的海景奇觀及海岸風光，每逢夏日，海上盡是弄潮張帆的人潮，整條綿延的山海線，銜接成臺北人最鍾愛的黃金旅遊路線。');
    $p2.stop().text('');
    $p2.stop().append("<p class='morelink'>更多內容<a href='m1.aspx?sNo=0001091' > </a></p>");
});
$('.HS4').click(function(){
    $backgroundImage3.stop().css('background','url(/userfiles/map/HS/bg42.jpg) center center');
	$backgroundImage3.stop().css('background-size','cover');
    $title.stop().text('桃園市');
    $p1.stop().text('桃園市最早稱為芝芭里，因以前種有許多桃樹，盛產桃花的地方，而稱之為桃園，但目前桃花樹已不多見，早期曾因遠東第一大水庫－石門水庫的興建而名盛一時，許多觀光客到桃園，勢必要到石門水庫。而境內最重要的地點，莫過於國家的大門-臺灣桃園國際機場，每年利用桃園國際機場出入境旅客更達千餘萬人次，桃園市因此也成為「國門之都」。 ');
    $p2.stop().text('');
    $p2.stop().append("<p class='morelink'>更多內容<a href='m1.aspx?sNo=0001107'  > </a></p>");
});
$('.HS5').click(function(){
    $backgroundImage3.stop().css('background','url(/userfiles/map/HS/bg43.jpg) center center');
	$backgroundImage3.stop().css('background-size','cover');
    $title.stop().text('新竹縣');
    $p1.stop().text('新竹縣是全臺客家族群分佈最多的縣，早期多由紅毛港及南寮港登陸，以海豐和陸豐人居多。居住在風城的客家人，因為環境的關係，無論是語言、風俗民情和信仰，均自成一格。');
    $p2.stop().text('');
    $p2.stop().append("<p class='morelink'>更多內容<a href='m1.aspx?sNo=0001108'  > </a></p>");
});
$('.HS6').click(function(){
    $backgroundImage3.stop().css('background','url(/userfiles/map/HS/bg44.jpg) center center');
	$backgroundImage3.stop().css('background-size','cover');
    $title.stop().text('新竹市');
    $p1.stop().text('新竹原名竹塹，北從桃園台地的尾端至鳳山崎，南到香山丘陵，三面環山，僅西面臨海，形成一畚箕地形。是臺灣與中國大陸東南沿海距離最短之處，人口分佈以客家人居多，占總人口數的85％以上，因此在臺灣的客家文化史上扮演舉足輕重的角色，而閩南人則多係來自泉州，現集中於新竹市。');
    $p2.stop().text('');
    $p2.stop().append("<p class='morelink'>更多內容<a href='m1.aspx?sNo=0001109'  > </a></p>");
});
$('.HS7').click(function(){
    $backgroundImage3.stop().css('background','url(/userfiles/map/HS/bg45.jpg) center center');
	$backgroundImage3.stop().css('background-size','cover');
    $title.stop().text('苗栗縣');
    $p1.stop().text('苗栗原名「貓裡」，語意為「平原」或「美麗」之意。位於中部蜂腰地帶，依山面海，群山夾峙的平原，是一個多山的縣城。客家人的入墾苗栗地區，始於乾隆年間，他們沿著後龍溪開發，深入山區，先後開發苗栗縣內之西南、西北及東部地區。由於縣境以客家人居多，道地客家風味的餐飲，頗具特色。');
    $p2.stop().text('');
    $p2.stop().append("<p class='morelink'>更多內容<a href='m1.aspx?sNo=0001110' > </a></p>");
});
$('.HS8').click(function(){
    $backgroundImage3.stop().css('background','url(/userfiles/map/HS/bg46.jpg) center center');
	$backgroundImage3.stop().css('background-size','cover');
    $title.stop().text('臺中市');
    $p1.stop().text('臺中位於臺灣西半部的樞紐位置，四季氣候宜人。日治時期，積極興建鐵路、開通公路及海港運輸，讓臺中遂躍身為中臺灣政治、經濟、交通、文化的重鎮。臺中市對古蹟的保存不遺餘力，完整保留了日治時期棋盤式街道、具有兩百年歷史的樂成宮、雕工華麗且香火鼎盛的城隍廟，以及三殿式格局的萬和宮、古蹟-張廖家廟，以及迄今同樣已有兩百多年歷史的大甲鎮瀾宮，在在都讓人發思古之幽情。 ');
    $p2.stop().text('現代與傳統相互融合，在尋古訪幽之餘，國立臺灣美術館、國立科學博物館與臺中市文化局共築成美學、文化與知識的鐵三角，不僅激盪出人們內心對美的感受與對科學的求知渴望，從真善美心靈的提升，更營造出優質的休閒生活！林立的百貨公司、各有特色的商圈、各色陳列的精品名店、濃濃歐式風味的精明商圈，以及美術園道的椰林餐廳，都讓臺中市有如巴黎香榭大道的優雅浪漫，滿足所有追求時尚的品味饗宴。 ');
    $p2.stop().append("<p class='morelink'>更多內容<a href='m1.aspx?sNo=0001112'  > </a></p>");
});
$('.HS9').click(function(){
    $backgroundImage3.stop().css('background','url(/userfiles/map/HS/bg47.jpg) center center');
	$backgroundImage3.stop().css('background-size','cover');
    $title.stop().text('彰化縣');
    $p1.stop().text('彰化素有「臺灣穀倉」之稱，東南北三面環山，西臨臺灣海峽，境內以八卦山為主峰。該區氣候暖和，雨量適中，宜於農業發展，特別以花卉栽培最為發達。彰化古稱「半線」，係原住民社名。清雍正年間，閩海居民相繼遷移，聚居現今鹿港一帶，人口、經貿日益繁榮，始設縣取「顯彰聖化」之意，而名「彰化」。');
    $p2.stop().text('');
    $p2.stop().append("<p class='morelink'>更多內容<a href='m1.aspx?sNo=0001113' > </a></p>");
});
$('.HS10').click(function(){
    $backgroundImage3.stop().css('background','url(/userfiles/map/HS/bg48.jpg) center center');
	$backgroundImage3.stop().css('background-size','cover');
    $title.stop().text('雲林縣');
    $p1.stop().text('雲林縣位於臺灣的中南部，嘉南平原的最北端，全縣幾乎是沖積平原，是臺灣的榖倉及農業縣，縣內農產品眾多，不論是聞名遐邇的斗六文旦、香Q有嚼勁的濁水米，還有沾醬不可少，香醇濃郁的西螺醬油，更或者是養生療效極佳的莿桐大蒜精，這些可都是雲林的好東西。境內天然景觀當屬草嶺風景區了，草嶺地區的天然景觀豐富，讓人不得不讚嘆大自然鬼斧神工的巧妙！');
    $p2.stop().text('');
    $p2.stop().append("<p class='morelink'>更多內容<a href='m1.aspx?sNo=0001115'  > </a></p>");
});

$('.HS11').click(function(){
    $backgroundImage3.stop().css('background','url(/userfiles/map/HS/bg49.jpg) center center');
	$backgroundImage3.stop().css('background-size','cover');
    $title.stop().text('南投縣');
    $p1.stop().text('若說中部地區是臺灣的心臟地帶，那南投地區即是「臺灣心」。南投是臺灣唯一沒有臨海的縣。南投縣市面積 4100平方公里，境內山多平原少，四周盡是山巒疊翠，觀光資源相當豐富，可說隨處皆是風景。山間城集的埔里，這裡的水質甜美、美酒香醇醉人，有著說不盡的好味道。水里的蛇窯、集集的綠色隧道、溪頭、杉林溪、日月潭、九族文化村等都是觀光旅遊的好去處。');
    $p2.stop().text('');
    $p2.stop().append("<p class='morelink'>更多內容<a href='m1.aspx?sNo=0001114'  > </a></p>");
});
$('.HS12').click(function(){
    $backgroundImage3.stop().css('background','url(/userfiles/map/HS/bg50.jpg) center center');
	$backgroundImage3.stop().css('background-size','cover');
    $title.stop().text('嘉義縣');
    $p1.stop().text('嘉義原名諸羅，明天啟2（1622）年，福建漳州人顏思齊率人自笨港（今雲林北港與嘉義新港一帶）登陸開墾，可謂臺灣最古老的漢民聚落之一。清乾隆51（1786）年，林爽文起義，諸羅軍民全力守城，事後清廷為嘉許當地軍民之義舉，遂將諸羅改名為嘉義，至今嘉義市義民廟內尚保留此段史蹟。');
    $p2.stop().text('');
    $p2.stop().append("<p class='morelink'>更多內容<a href='m1.aspx?sNo=0001116'  > </a></p>");
});

$('.HS14').click(function(){
    $backgroundImage3.stop().css('background','url(/userfiles/map/HS/bg51.jpg) center center');
	$backgroundImage3.stop().css('background-size','cover');
    $title.stop().text('嘉義市');
    $p1.stop().text('位於臺灣西南部「嘉南平原」北端，北回歸線經過本市南邊約一公里處。本市開發甚早，荷蘭人留有「紅毛井」、「紅毛埤」等遺跡。明鄭時代，在屯田地設有營鎮，日漸形成聚落。清康熙43年（1704），縣署歸治諸羅山（嘉義市），並築建木柵城，是臺灣最早的城柵。');
    $p2.stop().text('');
    $p2.stop().append("<p class='morelink'>更多內容<a href='m1.aspx?sNo=0001117'   > </a></p>");
});
$('.HS13').click(function(){
    $backgroundImage3.stop().css('background','url(/userfiles/map/HS/bg52.jpg) center center');
	$backgroundImage3.stop().css('background-size','cover');
    $title.stop().text('臺南市');
    $p1.stop().text('臺南市是臺灣的發祥地，是全臺歷史最悠久的都市。西元1661年，鄭成功驅逐荷蘭人後，在臺南開府設治，當時中國居民移居來臺者紛至沓來，臺南都會之規模於是奠定。至1683年，清國平臺，在臺南設臺灣府，為全臺首府。1885年，臺灣建省，遂改臺灣府為臺南府，是為臺南得名之緣由。 ');
     $p2.stop().text('直至十九世紀末期，臺南一直是臺灣政治經濟文化之重心，由於這層歷史淵源，故臺南市古蹟名勝特多，佔有臺灣最悠久歷史及文化發展地位，稱為文化古都，聞名全臺，實有其緣由也。除了歷史文化特色之外，臺南更擁有如詩畫般的自然生態美景，及聞名遐邇的農漁產品特色美食。春天擁有聞名的「臺灣國際蘭展」於後壁鄉臺灣蘭花生物科技園區，讓您一探早春蘭花嬌羞的風情；每年農曆正月十五更有壯觀的鹽水蜂炮，在在吸引國內外人士前往觀賞；夏天寓教於樂的梅嶺賞螢、白河賞蓮及赤嘴園活動，讓您與孩子透過生態教育聯繫感情；涼爽的秋季，可以到東山一嚐香醇的阿拉比卡咖啡；到了冬天還可以到關子嶺感受泥漿溫泉，讓疲憊的心在溫泉區得到解放。');
    $p2.stop().append("<p class='morelink'>更多內容<a href='m1.aspx?sNo=0001119'  > </a></p>");
});
$('.HS15').click(function(){
    $backgroundImage3.stop().css('background','url(/userfiles/map/HS/bg53.jpg) center center');
	$backgroundImage3.stop().css('background-size','cover');
    $title.stop().text('高雄市');
    $p1.stop().text('臺灣南方最繁華的國際城市─『高雄市』，為2009世界運動會主辦城市，因受海洋氣候調節，全年陽光普照、氣候宜人，有獨特的「海洋首都」特性。近年來大力推展觀光事業，已成為全臺最美麗的城市之一。 ');
    $p2.stop().text('高雄除了愛河、壽山、西子灣、蓮池潭、旗津、左營舊城等知名景點外，融合了福佬人、客家人、平埔族、鄒族、魯凱族、布農族、排灣族、以及眷村文化，是個 『山、海、河港、人文、古跡』的城市。來到高雄，您不僅可以體驗自然生態、品嘗珍饈佳饌，還能欣賞客家美濃紙傘、內門宋江陣、大樹佛光山…等多元的民族文化，更別提擁有全臺最大的購物中心，及著名的觀光夜市，可說是全部旅遊元素一應俱全，實在值得您深度造訪。');
    $p2.stop().append("<p class='morelink'>更多內容<a href='m1.aspx?sNo=0001121'  > </a></p>");
});
$('.HS16').click(function(){
    $backgroundImage3.stop().css('background','url(/userfiles/map/HS/bg54.jpg) center center');
	$backgroundImage3.stop().css('background-size','cover');
    $title.stop().text('屏東縣 ');
    $p1.stop().text('屏東縣是臺灣最南端的縣，輪廓狹長，依山傍海，東臨太平洋，西向臺灣海峽，南面巴士海峽，地處熱帶，四季如春，風光明媚，椰影婆娑，充滿南國風味，有「臺灣南洋」之稱，是國內不可多得的觀光聖地。');
    $p2.stop().text('');
    $p2.stop().append("<p class='morelink'>更多內容<a href='m1.aspx?sNo=0001122'> </a></p>");
});
$('.HS17').click(function(){
 

    $backgroundImage3.stop().css('background','url(/userfiles/map/HS/bg55.jpg) center center');
	$backgroundImage3.stop().css('background-size','cover');
    $title.stop().text('宜蘭縣 ');
    $p1.stop().text('宜蘭市位居蘭陽平原中心的精華地帶，河川縱橫提供豐富的灌溉資源，讓居於平原中央的宜蘭市擁有肥沃土地與充裕水源，成為一個農產豐饒的稻米之鄉。這麼多年來，宜蘭市一直是蘭陽平原的經政文教重心，也是南來北往的交通要道。');
    $p2.stop().text('');
    $p2.stop().append("<p class='morelink'>更多內容<a href='m1.aspx?sNo=0001106' > </a></p>");
});
$('.HS18').click(function(){
    $backgroundImage3.stop().css('background','url(/userfiles/map/HS/bg56.jpg) center center');
	$backgroundImage3.stop().css('background-size','cover');
    $title.stop().text('花蓮縣');
    $p1.stop().text('花蓮─昔日名「哆囉滿」，明朝弘治年間，葡萄牙人航海經過臺灣海峽，繞到臺灣東海岸，發現砂金，就用葡萄牙產金河流「利澳特愛魯」（Rio Dnero）稱呼花蓮。在漢人移居之前，原住民取名也有因自然位置與地形、特殊產物或發生事故而命名的，祇是漢人開拓花蓮之後，更有因拓殖建置的初景、歷史的動機、日本移民懷鄉思而命其本國地名、或語言轉訛而來的地名。');
    $p2.stop().text('');
    $p2.stop().append("<p class='morelink'>更多內容<a href='m1.aspx?sNo=0001124' > </a></p>");
});
$('.HS20').click(function(){
    $backgroundImage3.stop().css('background','url(/userfiles/map/HS/bg58.jpg) center center');
	$backgroundImage3.stop().css('background-size','cover');
    $title.stop().text('連江縣');
    $p1.stop().text('馬祖列島以「媽祖」而得名，位於臺灣海峽西北西方，隸屬於福建省連江縣，面臨閩江口、連江口及羅源灣，與大陸僅呎水之隔，轄分南竿、北竿、莒光及東引等4鄉5島，為目前台澎金馬自由地區最北端之領土。');
    $p2.stop().text('');
    $p2.stop().append("<p class='morelink'>更多內容<a href='m1.aspx?sNo=0001127' > </a></p>");
});

$('.HS19').click(function(){
    $backgroundImage3.stop().css('background','url(/userfiles/map/HS/bg57.jpg) center center');
	$backgroundImage3.stop().css('background-size','cover');
    $title.stop().text('臺東縣');
    $p1.stop().text('臺東縣為臺灣第三大縣，境內多山，西邊雄踞著中央山脈，中北部有海岸山脈盤據。從平原到高山，從海洋到離島，自然景觀豐富，從熱帶、溫熱帶到寒帶植物，你都可在臺東發現。由於受山脈阻隔與洋流影響，臺東縣年均溫在22度以上的月份高達8個月。所以臺東又有太陽的故鄉之稱。除了高山地形外，臺東海岸線綿延長達176公里，近年有賞鯨豚的生態旅遊活動，讓臺東的海洋之旅更為豐富。');
    $p2.stop().text('');
    $p2.stop().append("<p class='morelink'>更多內容<a href='m1.aspx?sNo=0001123' > </a></p>");
});
$('.HS21').click(function(){
    $backgroundImage3.stop().css('background','url(/userfiles/map/HS/bg59.jpg) center center');
	$backgroundImage3.stop().css('background-size','cover');
    $title.stop().text('金門縣');
    $p1.stop().text('金門，一個曾經在歷史上因為屢次勝利戰役而赫赫有名的自由聖地，是中華民國政府所轄的島縣，屏障著臺灣與澎湖，也是自由世界在太平洋上的反共前哨。');
    $p2.stop().text('');
    $p2.stop().append("<p class='morelink'>更多內容<a href='m1.aspx?sNo=0001126' > </a></p>");
});
$('.HS22').click(function(){
    $backgroundImage3.stop().css('background','url(/userfiles/map/HS/bg60.jpg) center center');
	$backgroundImage3.stop().css('background-size','cover');
    $title.stop().text('澎湖縣');
    $p1.stop().text('澎湖舊稱「平湖」、「澎瀛」、「澎海」，又稱「西瀛」、「島夷」等等，澎湖的建築多與福建、金門等地相似，材料則以當地出產的硓(石古)石、石灰、砂土、玄武岩為主。此地宗教活動特別頻繁，有關於媽祖、王爺與王船、鸞堂等極具地方色彩之活動，並有大小廟宇約近200座，較具名氣的有天后宮、城隍廟、武聖廟、保安宮等。');
    $p2.stop().text('');
    $p2.stop().append("<p class='morelink'>更多內容<a href='m1.aspx?sNo=0001125'> </a></p>");
});




//lihgt--------------------------臺灣燈塔-------------------------------------------------------------------------------------
$('.light_map_1').click(function(){
    $backgroundImage6.stop().css('background','url(/userfiles/map/light/bg1.jpg) center center ');
	$backgroundImage6.stop().css('background-size','cover');
    $title.stop().text('三貂角燈塔');
	$p1.stop().text('');
    $p1.stop().append('<p>啟用年代:A.D.1935</p><p>塔高:16.5公尺</p><p>燈高:100.6公尺</p><p>光質:Fl(2).WR.28sec</p><p>位置:新北市228貢寮區福連村馬崗街38號</p>');
    $p2.stop().text('民國20年（西元1931年）建造的三貂角燈塔，位於新北市貢寮區三貂角，是本島最東邊的燈塔，也是太平洋許多過往船隻重要的方向指標。燈塔內設有展覽室，展示臺灣燈塔的史料與珍貴圖片。濱海公路通車後遊客絡繹不絕，民國八十一年元月起應地方要求正式開放供民眾參觀，是我國最早開放民眾參觀的燈塔。');
    $p2.stop().append("<p class='morelink'>更多內容<a href='m1.aspx?sNo=0019424&id=A12-00202' > </a></p>");
});
$('.light_map_2').click(function(){
    $backgroundImage6.stop().css('background','url(/userfiles/map/light/bg2.jpg) center center ');
	$backgroundImage6.stop().css('background-size','cover');
    $title.stop().text('七美嶼燈塔');
	$p1.stop().text('');
    $p1.stop().append('<p>啟用年代:A.D.1939</p><p>塔高:8.3公尺</p><p>燈高:40.8公尺</p><p>光質:Fl(2).W.10sec</p><p>位置:澎湖縣88341七美嶼南港村1鄰西南1之5號</p>');
    $p2.stop().text('民國28年（西元1939年）興建之七美嶼燈塔，位於澎湖縣七美嶼南角崖頂，又稱「南滬燈塔」，是日本人在臺灣興建的最後一座燈塔。塔身為鋼筋混凝土結構，早年使用電石氣，民國53年海關重建時，改為電燈發光。位於七美嶼最南端的「南淺漁場」是巴士海峽與渤海暖流交會之處，因此日人於此設立燈塔，除了航行指標考量，安全獲取此地龐大的漁業資源，更是主因。').animate({opacity: 1},"slow");
    $p2.stop().append("<p class='morelink'>更多內容<a href='m1.aspx?sNo=0019424&id=A12-00185'  > </a></p>");
});
$('.light_map_3').click(function(){
    $backgroundImage6.stop().css('background','url(/userfiles/map/light/bg3.jpg) center center ');
	$backgroundImage6.stop().css('background-size','cover');
    $title.stop().text('北椗島燈塔');
	$p1.stop().text('');
    $p1.stop().append('<p>啟用年代A.D.1882</p><p>塔高:17.5公尺</p><p>燈高:36.3公尺</p><p>光質:Fl(2).W.10sec</p><p>位置:金門縣北椗島</p>');
    $p2.stop().text('民國前30年（西元1882年）建造的北椗島燈塔，位於廈門區北椗島山頂，為一磚造白色圓形燈塔。北椗島燈塔頂端的燈器二次大戰遭盟軍炸燬，民國36年另設三角形鐵架，民國75年整修原塔身，燈器由鐵架移設原塔頂。北椗島東西狹窄、南北細長，在南北兩端緩緩有延伸入海的礁岩，因此漲潮或是巨風來襲時附近海域便相當危險，也因此乃有該燈塔的建造。');
    $p2.stop().append("<p class='morelink'>更多內容<a href='m1.aspx?sNo=0019424&id=A12-00210' > </a></p>");
});
$('#NFRA .light_map_4').click(function(){
    $backgroundImage6.stop().css('background','url(/userfiles/map/light/bg4.jpg) center center ');
	$backgroundImage6.stop().css('background-size','cover');
    $title.stop().text('臺中港燈塔');
	$p1.stop().text('');
    $p1.stop().append('<p>啟用年代A.D.1982</p><p>塔高:62.6公尺</p><p>燈高:62公尺</p><p>光質:Fl(3).W.30sec</p><p>位置:臺中港一號碼頭遠東倉儲頂端</p>');
    $p2.stop().text('民國71年（西元1982年）興建的臺中港燈塔，位於臺中港一號碼頭遠東倉儲頂端，是全臺灣地區唯一一座興建在高樓頂端也是塔身最高的燈塔。由於從桃園市白沙岬燈塔到澎湖北端目斗嶼燈塔之間有188公浬缺乏標誌定位，因此海關於民國56年在臺中市清水區興建高美燈塔，民國71年設立臺中港燈塔，因臺中港與高美燈塔、芳苑燈塔距離過近，海關乃關閉高美燈塔，並將其燈器直接移植到臺中港燈塔上。');
    $p2.stop().append("<p class='morelink'>更多內容<a href='m1.aspx?sNo=0019424&id=A12-00193' > </a></p>");
});
$('.light_map_5').click(function(){
    $backgroundImage6.stop().css('background','url(/userfiles/map/light/bg5.jpg) center center ');
	$backgroundImage6.stop().css('background-size','cover');
    $title.stop().text('白沙岬燈塔');
	$p1.stop().text('');
    $p1.stop().append('<p>啟用年代A.D.1901</p><p>塔高:27.7公尺</p><p>燈高:36.6公尺</p><p>光質:A1.Fl(2).WR.20sec</p><p>位置:桃園市328觀音區新坡下16號</p>');
    $p2.stop().text('民國前1 4 年（ 西元1 8 9 8 年） 建造的白沙岬燈塔，位於桃園市觀音區白沙岬，為磚造圓塔。原先高度超過38公尺僅次於目斗嶼燈塔，唯二次大戰期間受損，重建後高度減為27.7公尺。白沙岬燈塔是日本人在臺灣興建的第三座燈塔，其建造乃因其所在地形與地勢得天獨厚，不但位於地理要衝而能防守狹長海岸線，同時兼具軍事與經濟上的重要價值。');
    $p2.stop().append("<p class='morelink'>更多內容<a href='m1.aspx?sNo=0019424&id=A12-00194' > </a></p>");
});
$('.light_map_6').click(function(){
    $backgroundImage6.stop().css('background','url(/userfiles/map/light/bg6.jpg) center center ');
	$backgroundImage6.stop().css('background-size','cover');
    $title.stop().text('目斗嶼燈塔');
	$p1.stop().text('');
    $p1.stop().append('<p>啟用年代A.D.1902</p><p>塔高:39.9公尺</p><p>燈高:49公尺</p><p>光質:Fl(1).W.20sec</p><p>位置:澎湖縣88446白沙鄉吉貝村186號</p>');
    $p2.stop().text('民國前13年（西元1899年）興建的目斗嶼燈塔，位於澎湖縣北端目斗嶼島上，以銑鐵建造，是遠東地區最高的銑鐵燈塔，因為臨近海域常發生濃霧，外觀漆成黑白相間的色澤，讓航行附近的船隻較易看到塔身。由於目斗嶼四周礁石羅佈，形勢險要，估計設燈塔前沉沒其附近船隻至少在50艘以上，是船難發生最多的燈塔。目斗嶼周圍海域龐大且豐富的漁業資源，吸引無數漁民前往，近年來，目斗嶼更成為著名的觀光景點，迷人的海底風光與海域景緻，每年湧入不少遊客，更顯熱鬧。');
    $p2.stop().append("<p class='morelink'>更多內容<a href='m1.aspx?sNo=0019424&id=A12-00188' > </a></p>");
});
$('.light_map_7').click(function(){
    $backgroundImage6.stop().css('background','url(/userfiles/map/light/bg7.jpg) center center ');
	$backgroundImage6.stop().css('background-size','cover');
    $title.stop().text('安平燈塔');
	$p1.stop().text('');
    $p1.stop().append('<p>啟用年代A.D.1891</p><p>塔高:21.8公尺</p><p>燈高:22.6公尺</p><p>光質::Fl(3).W.15sec</p><p>位置:臺南市70841安平區漁光路202號</p>');
    $p2.stop().text('民國前21年（西元1891年）興建的安平燈塔，現位於臺南市安平港口北端海灘，原先是設在安平古堡上的磚造圓塔，不過安平港因沙洲變遷、河道改變的影響，導致燈塔離海岸愈來愈遠，再加上沿海種植的防風林遮蔽了燈光，失去功能，遂於民國49年3月起停止運轉。不過，海關於民國54年重建安平燈塔為一座方形鐵塔，佇立於港外的沙灘上，繼續發揮導航的重要功能。');
    $p2.stop().append("<p class='morelink'>更多內容<a href='m1.aspx?sNo=0019424&id=A12-00189' > </a></p>");
});
$('.light_map_8').click(function(){
    $backgroundImage6.stop().css('background','url(/userfiles/map/light/bg8.jpg) center center ');
	$backgroundImage6.stop().css('background-size','cover');
    $title.stop().text('奇萊鼻燈塔');
	$p1.stop().text('');
    $p1.stop().append('<p>啟用年代A.D.1931</p><p>塔高:13.4公尺</p><p>燈高:33.4公尺</p><p>光質:Iso.W.6sec</p><p>位置:花蓮縣97064花蓮市華東路101號</p>');
    $p2.stop().text('民國20年（西元1931年）建造的奇萊鼻燈塔，位於花蓮港北端奇萊鼻岬角，原為白色方形燈塔，二次大戰被美軍飛機炸毀，遭受嚴重損害停止發光。民國52年海關為配合開放花蓮港為國際港，在原塔附近重建白色五角形混凝土燈塔一座，這是臺灣唯一五角型鋼筋混凝土燈塔，也是我國燈塔中唯一設有土地公廟的燈塔。');
    $p2.stop().append("<p class='morelink'>更多內容<a href='m1.aspx?sNo=0019424&id=A12-00204' > </a></p>");
});
$('.light_map_9').click(function(){
    $backgroundImage6.stop().css('background','url(/userfiles/map/light/bg9.jpg) center center ').animate({opacity: 1}, "900");
	$backgroundImage6.stop().css('background-size','cover');
    $title.stop().text('東引島燈塔').animate({opacity: 1},"slow");
	$p1.stop().text('');
    $p1.stop().append('<p>啟用年代A.D.1904</p><p>塔高:14.2公尺</p><p>燈高:97.8公尺</p><p>光質:Fl(3).W.15sec</p><p>位置:連江縣212東引鄉樂華村169號</p>');
    $p2.stop().text('民國前10年(西元1902年)興建的東引島燈塔，位於福州區東引島東坡，又稱為「東湧島燈塔」，東引島燈塔是我國距臺灣最遠的燈塔。為十八世紀英國式建築，塔身為圓形磚造，扇形地基由花崗石板鋪成，粗壯圓柱式塔身由紅磚砌成，漆成白色。由於東引島鄰近海域佈滿險岩暗礁，民國47年因軍事理由暫停使用，民國78年6月又恢復發光。該塔為國定古蹟。');
    $p2.stop().append("<p class='morelink'>更多內容<a href='m1.aspx?sNo=0019424&id=A12-00213'> </a></p>");
});
$('.light_map_10').click(function(){
    $backgroundImage6.stop().css('background','url(/userfiles/map/light/bg10.jpg) center center ').animate({opacity: 1}, "900");
	$backgroundImage6.stop().css('background-size','cover');
    $title.stop().text('東吉嶼燈塔').animate({opacity: 1},"slow");
	$p1.stop().text('');
    $p1.stop().append('<p>啟用年代A.D.1911</p><p>塔高::24.4公尺</p><p>燈高:67.1公尺</p><p>光質:LFl(1).W.12sec</p><p>位置:澎湖縣88243望安鄉東吉村150號</p>');
    $p2.stop().text('民國前1年（西元1911年）興建的東吉嶼燈塔，位於澎湖縣東吉嶼北角崖頂，原為鐵造圓筒形燈塔，民國27年改建為鋼筋混凝土圓塔，外表漆黑白相間的平行橫條紋。東吉嶼是澎湖群島中與臺灣本島距離最近的一座島嶼，螺旋狀的急湍暗流來回其間，被稱為黑水溝，附近海域觸礁沉沒的船隻甚多，早期東吉嶼東邊的黑水溝被航海人視為鬼域，是最危險的區域。');
    $p2.stop().append("<p class='morelink'>更多內容<a href='m1.aspx?sNo=0019424&id=A12-00184' > </a></p>");
});
$('.light_map_11').click(function(){
    $backgroundImage6.stop().css('background','url(/userfiles/map/light/bg11.jpg) center center ');
	$backgroundImage6.stop().css('background-size','cover');
    $title.stop().text('東椗島燈塔');
	$p1.stop().text('');
    $p1.stop().append('<p>啟用年代A.D.1871</p><p>塔高::19.2公尺</p><p>燈高:69.2公尺</p><p>光質:Fl(1).W.10sec</p><p>位置:金門縣金城鎮東椗島</p>');
    $p2.stop().text('民國前41年（西元1871年）興建的東椗島燈塔，位於廈門區東椗島山頂，塔身為磚造黑色圓形結構，是臺灣地區首座黑色燈塔。也是中國海關成立海務部門後，在廈門海域興建的第一座西式燈塔，由英國籍燈塔工程師韓得善所規劃建造。東椗島燈塔扼守福建廈門灣與金門料羅灣之間的海道，是東椗島的地標，也是接待外界貴賓的觀光景點之一。');
    $p2.stop().append("<p class='morelink'>更多內容<a href='m1.aspx?sNo=0019424&id=A12-00209'> </a></p>");
});
$('.light_map_12').click(function(){
    $backgroundImage6.stop().css('background','url(/userfiles/map/light/bg12.jpg) center center ');
	$backgroundImage6.stop().css('background-size','cover');
    $title.stop().text('芳苑燈塔').animate({opacity: 1},"slow");
	$p1.stop().text('');
    $p1.stop().append('<p>啟用年代A.D.1983</p><p>塔高::37.4公尺</p><p>燈高:35.7公尺</p><p>光質:Fl(1).W.10sec</p><p>位置:彰化縣52860芳苑鄉王功村漁港七路146號</p>');
    $p2.stop().text('民國72年（西元1983年）設置的芳苑燈塔，位於彰化縣芳苑鄉王功漁港，外表為漆成黑白垂直條紋的八角形燈塔，不僅是全臺燈塔中興建時間最晚的燈塔，而且更因當地地層下陷的關係，成為全臺灣唯一一座塔高高於燈高的燈塔。芳苑燈塔的設置，主要是為了維護彰化沿海漁船及往來於臺灣海峽的船隻安全，此地在昔日還可欣賞到彰化頗負盛名的八景之一─王功漁火！');
    $p2.stop().append("<p class='morelink'>更多內容<a href='m1.aspx?sNo=0019424&id=A12-00192'> </a></p>");
});
$('.light_map_13').click(function(){
    $backgroundImage6.stop().css('background','url(/userfiles/map/light/bg13.jpg) center center ').animate({opacity: 1}, "900");
	$backgroundImage6.stop().css('background-size','cover');
    $title.stop().text('東莒島燈塔').animate({opacity: 1},"slow");
	$p1.stop().text('');
    $p1.stop().append('<p>啟用年代:A.D.1872</p><p>塔高:19.5公尺</p><p>燈高:78.3公尺</p><p>光質:Fl(1+2).W.20sec</p><p>位置:連江縣211莒光鄉福正村</p>');
    $p2.stop().text('民國前40年（西元1872年）建造的東莒島燈塔，位於福州區東莒島東北角上，塔身為圓形石造，由英國人設計建造，牆身構造分為塔頂與塔身兩部分，塔頂與塔身的比例約為2比3，塔身趨於直筒狀，入口為中國拱式門卷，牆身開設方形窗，塔頂與塔身間的修護平臺，以挑簷石層層挑出，再用石灰漿抹出裝飾性的線腳。該塔為國定古蹟。');
    $p2.stop().append("<p class='morelink'>更多內容<a href='m1.aspx?sNo=0019424&id=A12-00212'> </a></p>");
});

$('.light_map_14').click(function(){
    $backgroundImage6.stop().css('background','url(/userfiles/map/light/bg14.jpg) center center ').animate({opacity: 1}, "900");
	$backgroundImage6.stop().css('background-size','cover');
    $title.stop().text('花蓮港燈塔').animate({opacity: 1},"slow");
	$p1.stop().text('');
    $p1.stop().append('<p>啟用年代:A.D.1910</p><p>塔高:28.4公尺</p><p>燈高:45.1公尺</p><p>光質:Fl(3).G.12sec</p><p>位置:花蓮縣97048花蓮市花蓮街1號</p>');
    $p2.stop().text('民國前2年（西元1910年）興建的花蓮港燈塔，位於花蓮港花崗山，為一高大的方形鐵架，原為鐵造燈桿，民國前2年以安平燈桿移設，桿身僅高度10公尺，該燈桿高度不足，光度不強，外海船隻不易望見，故於民國53年改建為鐵架燈塔，塔高增高為今日的28.4公尺，由於花蓮港燈塔所在地點視野良好，因此其燈器較其他鐵塔式的燈塔小得多。');
    $p2.stop().append("<p class='morelink'>更多內容<a href='m1.aspx?sNo=0019424&id=A12-00205' > </a></p>");
});
$('.light_map_15').click(function(){
    $backgroundImage6.stop().css('background','url(/userfiles/map/light/bg15.jpg) center center ').animate({opacity: 1}, "900");
	$backgroundImage6.stop().css('background-size','cover');
    $title.stop().text('花嶼燈塔').animate({opacity: 1},"slow");
	$p1.stop().text('');
    $p1.stop().append('<p>啟用年代:A.D.1939</p><p>塔高:12.5公尺</p><p>燈高:64.6公尺</p><p>光質:Fl(1).W.5sec</p><p>位置:澎湖縣望安鄉花嶼島</p>');
    $p2.stop().text('民國28年（西元1939年）興建的花嶼燈塔，位於澎湖縣花嶼山頂，塔身為鋼筋混凝土白色圓形燈塔，是臺灣最西的燈塔。花嶼島是澎湖群島極西的一座孤嶼，最高處約53公尺，花嶼燈塔即設於該處，是花嶼附近的主要地標，日本人因軍事上具重要地位而興建。在二次大戰期間，花嶼燈塔由於缺乏電石氣供應而停止發光，也使得它度過一劫並保存迄今。');
    $p2.stop().append("<p class='morelink'>更多內容<a href='m1.aspx?sNo=0019424&id=A12-00187'> </a></p>");
});
$('.light_map_16').click(function(){
    $backgroundImage6.stop().css('background','url(/userfiles/map/light/bg16.jpg) center center ').animate({opacity: 1}, "900");
	$backgroundImage6.stop().css('background-size','cover');
    $title.stop().text('查母嶼燈塔').animate({opacity: 1},"slow");
	$p1.stop().text('');
    $p1.stop().append('<p>啟用年代:A.D.1913</p><p>塔高:13.4公尺</p><p>燈高:24.7公尺</p><p>光質:Fl(1).W.6sec</p><p>位置:澎湖縣湖西鄉查母嶼</p>');
    $p2.stop().text('民國元年（西元1912年）建造的查母嶼燈塔，位於澎湖縣查母嶼岩礁上，其塔身結構為磚造八角形，外表漆成黑白相間的直條紋，二次大戰期間遭炸燬，民國37年修復重新發光。距查母嶼東南六浬之六尺礁為最危險之暗礁，清光緒年間曾有運兵船一艘於此處觸礁沉沒，士兵八百餘人溺死。該礁高潮時沒入水中，低潮時露出。還有漩窩潮流，漲潮時形成湍流，相當危險。');
    $p2.stop().append("<p class='morelink'>更多內容<a href='m1.aspx?sNo=0019424&id=A12-00214'> </a></p>");
});
$('.light_map_17').click(function(){
    $backgroundImage6.stop().css('background','url(/userfiles/map/light/bg17.jpg) center center ').animate({opacity: 1}, "900");
	$backgroundImage6.stop().css('background-size','cover');
    $title.stop().text('烏坵嶼燈塔').animate({opacity: 1},"slow");
	$p1.stop().text('');
    $p1.stop().append('<p>啟用年代:A.D.1874</p><p>塔高:19.5公尺</p><p>燈高:87.2公尺</p><p>光質:暫不發光</p><p>位置:金門縣烏坵鄉烏坵嶼</p>');
    $p2.stop().text('民國前38年（西元1874年）興建的烏坵嶼燈塔，位於福州區烏坵山頂，塔身為黑色圓形石造。塔上燈器因多次的臺海戰事而遭毀損並拆除，民國43年起停止發光，其外觀曾被軍方漆成防空保護迷彩綠色。烏坵嶼位於漁業發達的湄洲灣與興化灣之間，因此位置重要，燈塔的設置有助於兩灣船隻頻繁進出時的安全。');
    $p2.stop().append("<p class='morelink'>更多內容<a href='m1.aspx?sNo=0019424&id=A12-00211'> </a></p>");
});
$('.light_map_18').click(function(){
    $backgroundImage6.stop().css('background','url(/userfiles/map/light/bg18.jpg) center center ').animate({opacity: 1}, "900");
	$backgroundImage6.stop().css('background-size','cover');
    $title.stop().text('琉球嶼燈塔').animate({opacity: 1},"slow");
	$p1.stop().text('');
    $p1.stop().append('<p>啟用年代:A.D.1929</p><p>塔高:11.6公尺</p><p>燈高:88.7公尺</p><p>光���:LFl(1).W.8sec</p><p>位置:屏東縣琉球鄉忠孝路一帶</p>');
    $p2.stop().text('民國18年（西元1929年）建造的琉球嶼燈塔，位於屏東縣外海琉球嶼山頂，為白色圓形鋼筋混凝土結構。琉球嶼燈塔是臺灣地區唯一一座由漁會出資建造的燈塔，二次大戰時受損停止發光。民國41年移請海關修復管理。琉球嶼是臺灣附近島嶼中唯一的珊瑚礁島，豐富的魚類資源及遍布奇形怪狀的珊瑚礁岩，是南臺灣重要觀光景點之一。');
    $p2.stop().append("<p class='morelink'>更多內容<a href='m1.aspx?sNo=0019424&id=A12-00182'> </a></p>");
});
$('.light_map_19').click(function(){
    $backgroundImage6.stop().css('background','url(/userfiles/map/light/bg19.jpg) center center ').animate({opacity: 1}, "900");
	$backgroundImage6.stop().css('background-size','cover');
    $title.stop().text('高雄燈塔').animate({opacity: 1},"slow");
	$p1.stop().text('');
    $p1.stop().append('<p>啟用年代:A.D.1883</p><p>塔高:15.2公尺</p><p>燈高:58.2公尺</p><p>光質:Fl(4).W.30sec</p><p>位置:高雄市805旗津區旗下巷34號</p>');
    $p2.stop().text('民國前29年（西元1883年）設置的高雄燈塔，俗稱「旗后燈塔」，位於高雄市旗津區旗后山頂，其塔身則為臺灣地區唯一的白色八角形磚造燈塔，頂部呈現圓筒形，可由燈塔陽臺眺望高雄市全景。高雄港是臺灣南部的主要門戶，因此興建高雄燈塔自有助於確保商船往返貿易的安全。已有一百多年歷史的高雄燈塔，不僅見證了高雄港篳路藍縷的開發過程，於二次大戰時雖曾遭受機槍掃射，惟並無損害，始終發光不輟。');
    $p2.stop().append("<p class='morelink'>更多內容<a href='m1.aspx?sNo=0019424&id=A12-00183' > </a></p>");
});
$('.light_map_20').click(function(){
    $backgroundImage6.stop().css('background','url(/userfiles/map/light/bg20.jpg) center center ').animate({opacity: 1}, "900");
	$backgroundImage6.stop().css('background-size','cover');
    $title.stop().text('國聖港燈塔').animate({opacity: 1},"slow");
	$p1.stop().text('');
    $p1.stop().append('<p>啟用年代:A.D.1957</p><p>塔高:32.7公尺</p><p>燈高:34.2公尺</p><p>光質:Fl(2).W.15sec</p><p>位置:臺南市七股區頂頭額沙洲</p>');
    $p2.stop().text('民國46年（西元1957年）興建的國聖港燈塔，位於臺南市七股區國聖港，為一方錐形鋼架結構，塔身顏色為黑白相間。原國聖港燈塔啟用發光後，因受颱風襲擊及海潮侵蝕，沙洲盡失，整個燈塔陷入汪洋大海之中，民國58年遭受「衛歐拉」颱風摧襲，塔身倒塌，無法使用；民國59年6月移至附近頂頭額汕另建新塔，代替舊塔發光。');
    $p2.stop().append("<p class='morelink'>更多內容<a href='m1.aspx?sNo=0019424&id=A12-00190'> </a></p>");
});
$('.light_map_21').click(function(){
    $backgroundImage6.stop().css('background','url(/userfiles/map/light/bg21.jpg) center center ').animate({opacity: 1}, "900");
	$backgroundImage6.stop().css('background-size','cover');
    $title.stop().text('基隆燈塔').animate({opacity: 1},"slow");
	$p1.stop().text('');
    $p1.stop().append('<p>啟用年代:A.D.1900</p><p>塔高:11公尺</p><p>燈高:40.2公尺</p><p>光質:Mo(A).7sec</p><p>位置:基隆市20343中山區光華路51號</p>');
    $p2.stop().text('民國前13年（西元1899年）建造的基隆燈塔，位於基隆港西岸碼頭萬人堆鼻。迄今已有110年歷史的基隆燈塔，原為磚砌圓塔，民國51年改建為鋼筋混凝土圓塔。萬人堆鼻原是一岩石林立的海埔地，因周邊奇岩怪石林立，如眾多鼻頭堆疊羅列，因而得名，不過現今已改建為三十號碼頭。基隆燈塔早年還設有紅色光弧，以標示港外的險礁，頗為特殊，後因險礁遭炸除，紅色光弧也遭撤除。');
    $p2.stop().append("<p class='morelink'>更多內容<a href='m1.aspx?sNo=0019424&id=A12-00197' > </a></p>");
});
$('.light_map_22').click(function(){
    $backgroundImage6.stop().css('background','url(/userfiles/map/light/bg22.jpg) center center ').animate({opacity: 1}, "900");
	$backgroundImage6.stop().css('background-size','cover');
    $title.stop().text('基隆島燈塔').animate({opacity: 1},"slow");
	$p1.stop().text('');
    $p1.stop().append('<p>啟用年代::A.D.1980</p><p>塔高:12.3公尺</p><p>燈高:189.3公尺</p><p>光質:Fl(1).W.5sec</p><p>位置:基隆市中正區基隆嶼</p>');
    $p2.stop().text('民國69年（西元1980年）興建的基隆島燈塔，位於基隆港東北海面的基隆島頂，是由國人設計的八角形混凝土燈塔，外觀為黑白相間垂直條紋，是臺灣最早使用太陽能發電的燈塔。基隆島燈塔距基隆港僅4,500公尺，與和平島並列為基隆港出入的門面。基隆島四處仍可見粗獷的自然風光，四周雖是礁岩遍布，則是姿態萬千，也因此，基隆市政府在島上鋪設觀海棧道及登山步道護欄，民國81年還將之列為重要觀光景點。');
    $p2.stop().append("<p class='morelink'>更多內容<a href='m1.aspx?sNo=0019424&id=A12-00198'> </a></p>");
});
$('.light_map_23').click(function(){
    $backgroundImage6.stop().css('background','url(/userfiles/map/light/bg23.jpg) center center ').animate({opacity: 1}, "900");
	$backgroundImage6.stop().css('background-size','cover');
    $title.stop().text('淡水港燈塔').animate({opacity: 1},"slow");
	$p1.stop().text('');
    $p1.stop().append('<p>啟用年代:A.D.1796</p><p>塔高:32.7公尺</p><p>燈高:35.2公尺</p><p>光質:LFl(1).W.8sec</p><p>位置:新北市25155淡水區中正路一段87巷</p>');
    $p2.stop().text('淡水港燈塔前身為民國前116年（西元1796年），位於淡水河口北岸沙崙(今淡海西北岬)，由當地居民募款建設，塔身用天然丸石砌造，圓筒型，高約四公尺，其上裝嵌有玻璃燈籠，使用油燈，僱看守於日沒出時點滅燈火。為臺灣島最古老的燈塔，早期英國出版之海圖亦有記載。民國前24年（西元1888年）由海關另建的淡水港燈塔，為一座白色方形西式鐵塔。民國58年海關遷建為方形鋼架新塔，現位於新北市淡水港北岸。淡水港燈塔的興建，起因於淡水港開放為通商口岸後，外商輪船進出頻仍，為改善導航設施與減少船難而特別建造的。');
    $p2.stop().append("<p class='morelink'>更多內容<a href='m1.aspx?sNo=0019424&id=A12-00195'> </a></p>");
});
$('.light_map_24').click(function(){
    $backgroundImage6.stop().css('background','url(/userfiles/map/light/bg24.jpg) center center ').animate({opacity: 1}, "900");
	$backgroundImage6.stop().css('background-size','cover');
    $title.stop().text('野柳燈塔').animate({opacity: 1},"slow");
	$p1.stop().text('');
    $p1.stop().append('<p>啟用年代:A.D.1967</p><p>塔高:11.3公尺</p><p>燈高:99公尺</p><p>光質:LFl(1).W.10sec</p><p>位置:新北市萬里區野柳地質公園園區內</p>');
    $p2.stop().text('民國56年（西元1967年）建造的野柳燈塔，位於新北市萬里區東北角風景區內。該設計特殊，外型像蠟燭臺造型，主要是為了配合野柳豐富的地理景觀，燭臺造型的燈身下還有可供遊客休憩的桌椅，甚為突出美觀，曾獲國際燈塔界之好評。野柳燈塔的設置，與附近海域暗礁危岩密佈有關，介於富貴角與基隆港燈塔照射半徑間的野柳燈塔，具有加強基隆港的導航功能，也是船隻夜間航行的重要航路標誌。');
    $p2.stop().append("<p class='morelink'>更多內容<a href='m1.aspx?sNo=0019424&id=A12-00206'> </a></p>");
});
$('.light_map_25').click(function(){
    $backgroundImage6.stop().css('background','url(/userfiles/map/light/bg25.jpg) center center ').animate({opacity: 1}, "900");
	$backgroundImage6.stop().css('background-size','cover');
    $title.stop().text('富貴角燈塔').animate({opacity: 1},"slow");
	$p1.stop().text('');
    $p1.stop().append('<p>啟用年代:A.D.1897</p><p>塔高:14.3公尺</p><p>燈高:31.4公尺</p><p>光質:Fl(2).W.15sec</p><p>位置:新北市25342石門區富基村楓林1號</p>');
    $p2.stop().text('民國前16年（西元1896年）建造的富貴角燈塔，位於新北市石門區富貴岬角。原名富基角燈塔的富貴角燈塔，塔身原為八角形鐵造，民國5１年改為八角形混凝土塔身，外表為黑白平行相間的條紋，是臺灣島最北的燈塔。富貴角燈塔是日本人在臺灣興建的第一座燈塔，係因日本人為了建造臺灣與日本之間的海底電纜以及航路設備。由於特殊的地理環境及氣候，秋冬季節常出現濃霧，因此在塔內附設「霧笛」，這是首次在臺灣出現的航路標誌。');
    $p2.stop().append("<p class='morelink'>更多內容<a href='m1.aspx?sNo=0019424&id=A12-00196' > </a></p>");
});
$('.light_map_26').click(function(){
    $backgroundImage6.stop().css('background','url(/userfiles/map/light/bg26.jpg) center center ').animate({opacity: 1}, "900");
	$backgroundImage6.stop().css('background-size','cover');
    $title.stop().text('彭佳嶼燈塔').animate({opacity: 1},"slow");
	$p1.stop().text('');
    $p1.stop().append('<p>啟用年代:A.D.1909</p><p>塔高:26.2公尺</p><p>燈高:145.5公尺</p><p>光質:Fl(1).W.15sec</p><p>位置:基隆市中正區彭佳嶼</p>');
    $p2.stop().text('民國前6年（西元1906年）興建的彭佳嶼燈塔，位於基隆外海彭佳嶼島上，為一圓形磚砌塔，外表為白色，透鏡為一等旋轉透鏡，為臺灣地區使用最大旋轉透鏡燈塔。彭佳嶼為一座火山島，彭佳嶼燈塔建在火山口，相當特殊。由於彭佳嶼燈塔目標醒目，二戰期間曾遭盟軍飛機轟炸達四次之多。');
    $p2.stop().append("<p class='morelink'>更多內容<a href='m1.aspx?sNo=0019424&id=A12-00200' > </a></p>");
});
$('.light_map_27').click(function(){
    $backgroundImage6.stop().css('background','url(/userfiles/map/light/bg27.jpg) center center ').animate({opacity: 1}, "900");
	$backgroundImage6.stop().css('background-size','cover');
    $title.stop().text('塭港堆燈塔').animate({opacity: 1},"slow");
	$p1.stop().text('');
    $p1.stop().append('<p>啟用年代:A.D.1914</p><p>塔高:14.1公尺</p><p>燈高:15.7公尺</p><p>光質:Fl(1).W.4sec</p><p>位置:嘉義縣東石鄉外傘頂洲</p>');
    $p2.stop().text('民國3年（西元1914年）興建的塭港堆燈塔，位於雲林縣口湖鄉外傘頂洲，是一座建立在沙洲上的燈塔，塔身為鋼架塔。溫港堆燈塔的興建，係因其所在之長約5公里、寬1. 2公里的浮動沙丘，經常隨潮汐忽隱忽現，進而影響附近水道船隻的往返，為了安全之故，乃興建本燈塔。不過，由於塭港堆燈塔建立於沙洲上，因此不斷飄移，也不斷面臨地基遭沖毀的危險。塭港堆前後已重建六次，寫下臺灣與世界燈塔史上，燈塔重建次數最高的紀錄。');
    $p2.stop().append("<p class='morelink'>更多內容<a href='m1.aspx?sNo=0019424&id=A12-00191' > </a></p>");
});
$('.light_map_28').click(function(){
    $backgroundImage6.stop().css('background','url(/userfiles/map/light/bg28.jpg) center center ').animate({opacity: 1}, "900");
	$backgroundImage6.stop().css('background-size','cover');
    $title.stop().text('漁翁島燈塔').animate({opacity: 1},"slow");
	$p1.stop().text('');
    $p1.stop().append('<p>啟用年代:A.D.1778</p><p>塔高:11公尺</p><p>燈高:60.7公尺</p><p>光質:Fl(2).W.30sec</p><p>位置:澎湖縣881西嶼鄉外垵村195號</p>');
    $p2.stop().text('漁翁島燈塔位於澎湖縣漁翁島西南端。該塔位置原為西嶼塔燈之舊址，西嶼塔燈係於民國前134年（西元1778年）興建，原為七級石塔，建在漁翁島〈西嶼〉外垵高地上，塔上每夜燃點燈火，此為臺灣沿海導航標誌之嚆矢，亦為唯一有記載可據之我國原始設立之燈塔，現仍保存「西嶼塔燈碑記」石碑一座。漁翁島燈塔則為民國前37年（西元1875年），由海關另建新式燈塔，塔身為圓形鐵造，並配備3尊鑄鐵霧砲，1915年，漁翁島燈塔、辦公室、霧砲、霧笛、展覽室、石碑、圍牆、燈塔看守員宿舍與觀景樓全部漆成白色，在蔚藍的大海與綠色草原間，既醒目又耀眼。漁翁島燈塔為國定古蹟，週圍地區被列為古蹟公園，於民國81年起開放給民眾參觀。');
    $p2.stop().append("<p class='morelink'>更多內容<a href='m1.aspx?sNo=0019424&id=A12-00186' > </a></p>");
});
$('.light_map_29').click(function(){
    $backgroundImage6.stop().css('background','url(/userfiles/map/light/bg29.jpg) center center ').animate({opacity: 1}, "900");
	$backgroundImage6.stop().css('background-size','cover');
    $title.stop().text('綠島燈塔').animate({opacity: 1},"slow");
	$p1.stop().text('');
    $p1.stop().append('<p>啟用年代:A.D.1939</p><p>塔高:33.3公尺</p><p>燈高:48.2公尺</p><p>光質:Fl(2).W.20sec</p><p>位置:臺東縣951綠島鄉中寮村燈塔1號</p>');
    $p2.stop().text('民國28年（西元1939年）建造的綠島燈塔，位於臺東縣綠島鄉之西北海岸高地，塔身為圓形鋼筋混泥土結構。綠島舊名火燒島，是臺灣東南海面以及太平洋海域往來船隻的必經之地，由於綠島外海暗礁岩石密佈、時有船隻觸礁失事，民國27年更發生「胡佛總統號」郵輪觸礁沉沒一事。而在「胡佛總統號」船難發生時，1,000多名遊客被綠島居民奮勇救起，美國紅十字會為感謝綠島居民勇敢救人的義舉，乃於翌年的追悼紀念活動中捐款興建綠島燈塔。');
    $p2.stop().append("<p class='morelink'>更多內容<a href='m1.aspx?sNo=0019424&id=A12-00207' > </a></p>");
});
$('.light_map_30').click(function(){
    $backgroundImage6.stop().css('background','url(/userfiles/map/light/bg30.jpg) center center ').animate({opacity: 1}, "900");
	$backgroundImage6.stop().css('background-size','cover');
    $title.stop().text('鼻頭角燈塔').animate({opacity: 1},"slow");
	$p1.stop().text('');
    $p1.stop().append('<p>啟用年代:A.D.1897</p><p>塔高:12.3公尺</p><p>燈高:65.3公尺</p><p>光質:Oc.W.11sec</p><p>位置:新北市22451瑞芳區鼻頭路99之2號</p>');
    $p2.stop().text('民國前16年（西元1896年）建造的鼻頭角燈塔，位於新北市金瓜石北端之鼻頭角。舊塔原為日人興建的六角形鐵塔，二次大戰遭嚴重損毀，於民國60年改建為鋼筋混凝土白色圓塔。燈塔附近地理環境景觀豐富，山海交界處不僅有非常特殊的海蝕地形，還有碧草如茵的小階梯、紋路粗獷的斜坡，再加上山腰間有步道可一覽巨浪拍岸的奇景與波瀾壯闊的山海美景，景色宜人，相當特別。');
    $p2.stop().append("<p class='morelink'>更多內容<a href='m1.aspx?sNo=0019424&id=A12-00201' > </a></p>");
});
$('.light_map_31').click(function(){
    $backgroundImage6.stop().css('background','url(/userfiles/map/light/bg31.jpg) center center ').animate({opacity: 1}, "900");
	$backgroundImage6.stop().css('background-size','cover');
    $title.stop().text('鵝鑾鼻燈塔').animate({opacity: 1},"slow");
	$p1.stop().text('');
    $p1.stop().append('<p>啟用年代:A.D.1883</p><p>塔高:21.4公尺</p><p>燈高:56.4公尺</p><p>光質:Fl(1).W.10sec</p><p>位置:屏東縣946恆春鎮鵝鑾里燈塔路90號</p>');
    $p2.stop().text('民國前31年（西元1881年）興建的鵝鸞鼻燈塔，位於屏東縣鵝鸞鼻岬角，塔身為白色鐵造圓塔，是臺灣島最南的燈塔。燈樓面向西南方，背山臨海，並構築成砲壘形式，圍牆有射擊的槍眼，四周並築壕溝，是清廷防範原住民滋擾的防禦工事，也使得鵝鸞鼻燈塔成為全球獨一無二的武裝燈塔。民國51年改建時，換上全臺光力最強的旋轉透鏡電燈，使得鵝鸞鼻燈塔不僅是全臺光程最遠的燈塔，還享有「東亞之光」的美譽。目前成為墾丁國家公園觀光勝地之一環，其地左瀕太平洋，面對巴士海峽，與菲律賓之呂宋島遙遙相對，波濤帆影，天水一色，自然景色，令人心曠神怡，早經列為臺灣八景之一。於民國81年起開放給民眾參觀。');
    $p2.stop().append("<p class='morelink'>更多內容<a href='m1.aspx?sNo=0019424&id=A12-00181' > </a></p>");
});
$('.light_map_32').click(function(){
    $backgroundImage6.stop().css('background','url(/userfiles/map/light/bg32.jpg) center center ').animate({opacity: 1}, "900");
	$backgroundImage6.stop().css('background-size','cover');
    $title.stop().text('蘇澳燈塔').animate({opacity: 1},"slow");
	$p1.stop().text('');
    $p1.stop().append('<p>啟用年代:A.D.1927</p><p>塔高:7.9公尺</p><p>燈高:56.1公尺</p><p>光質:Fl(1).WR.7sec</p><p>位置:宜蘭縣27046蘇澳鎮北方澳大澳路1號</p>');
    $p2.stop().text('民國16年（西元1927年）興建的蘇澳燈塔，位於宜蘭縣蘇澳鎮北方澳後山，塔身是白色四方形混凝土建築，是我國燈塔中塔身最低，與基隆球子山燈塔同為少數方型的燈塔。蘇澳燈塔侷促山脊一隅，燈塔下的兩百多級石階步道，高聳直上險峻異常卻是燈塔守每日的必經之路。');
    $p2.stop().append("<p class='morelink'>更多內容<a href='m1.aspx?sNo=0019424&id=A12-00203' ></a></p>");
});
$('.light_map_33').click(function(){
    $backgroundImage6.stop().css('background','url(/userfiles/map/light/bg33.jpg) center center ').animate({opacity: 1}, "900");
	$backgroundImage6.stop().css('background-size','cover');
    $title.stop().text('蘭嶼燈塔').animate({opacity: 1},"slow");
	$p1.stop().text('');
    $p1.stop().append('<p>啟用年代:A.D.1983</p><p>塔高:14.8公尺</p><p>燈高:216.5公尺</p><p>光質:Fl(4).W.24sec</p><p>位置:臺東縣95241蘭嶼鄉椰油村300號</p>');
    $p2.stop().text('民國71年（西元1982年）興建的蘭嶼燈塔，位於臺東縣外海蘭嶼西北方山頂，塔身為白色圓形鋼筋混凝土結構。政府開放花蓮港為國際港後，花蓮與高雄間的貨輪激增，航行其間的貨輪僅有綠島與鵝鑾鼻兩座相距約180公里的燈塔，為增加安全，海關特於71年興建蘭嶼燈塔，因為建於高崗，燈塔的光源與海平面的距離為216.5公尺，是全臺灣燈高最高的燈塔。');
    $p2.stop().append("<p class='morelink'>更多內容<a href='m1.aspx?sNo=0019424&id=A12-00208'> </a></p>");
});


});





$(document).ready(function() {
  
  $('.slideshow').cycle({ 
    fx:    'zoom', 
    sync:  false, 
    delay: -2000
  });

  $('.food_btn1').mouseover(function(){
    $('.restaurant_bg').css('background-image', 'url(/UserFiles/map/img/2bg.png)');
    $('.slideshow1').css('display','block');
    $('.slideshow3').css('display','none');
    $('.slideshow2').css('display','none');
  });
  $('.food_btn2').mouseover(function(){
    $('.restaurant_bg').css('background-image', 'url(/UserFiles/map/img/3bg.png)');
    $('.slideshow1').css('display','none');
    $('.slideshow3').css('display','none');
    $('.slideshow2').css('display','block');

  });
  $('.food_btn3').mouseover(function(){
    $('.restaurant_bg').css('background-image', 'url(/UserFiles/map/img/4bg.png)');
    $('.slideshow2').css('display','none');
    $('.slideshow1').css('display','none');
    $('.slideshow3').css('display','block');

  });

  $('.food_btn1').mouseover(function(){
    $('.food_btn1').attr('src', 'UserFiles/map/img/btn1-2.png');
  });
  $('.food_btn1').mouseout(function(){
    $('.food_btn1').attr('src', 'UserFiles/map/img/btn1.png');
  });

  $('.food_btn2').mouseover(function(){
    $('.food_btn2').attr('src', 'UserFiles/map/img/btn2-2.png');
  });
  $('.food_btn2').mouseout(function(){
    $('.food_btn2').attr('src', 'UserFiles/map/img/btn2.png');
  });

  $('.food_btn3').mouseover(function(){
    $('.food_btn3').attr('src', 'UserFiles/map/img/btn3-2.png');
  });
  $('.food_btn3').mouseout(function(){
    $('.food_btn3').attr('src', 'UserFiles/map/img/btn3.png');
  });



});


(function($, undefined) {
"use strict";

var ver = '3.0.3';

function debug(s) {
  if ($.fn.cycle.debug)
    log(s);
}   
function log() {
  /*global console */
  if (window.console && console.log)
    console.log('[cycle] ' + Array.prototype.join.call(arguments,' '));
}
$.expr[':'].paused = function(el) {
  return el.cyclePause;
};


// the options arg can be...
//   a number  - indicates an immediate transition should occur to the given slide index
//   a string  - 'pause', 'resume', 'toggle', 'next', 'prev', 'stop', 'destroy' or the name of a transition effect (ie, 'fade', 'zoom', etc)
//   an object - properties to control the slideshow
//
// the arg2 arg can be...
//   the name of an fx (only used in conjunction with a numeric value for 'options')
//   the value true (only used in first arg == 'resume') and indicates
//   that the resume should occur immediately (not wait for next timeout)

$.fn.cycle = function(options, arg2) {
  var o = { s: this.selector, c: this.context };

  // in 1.3+ we can fix mistakes with the ready state
  if (this.length === 0 && options != 'stop') {
    if (!$.isReady && o.s) {
      log('DOM not ready, queuing slideshow');
      $(function() {
        $(o.s,o.c).cycle(options,arg2);
      });
      return this;
    }
    // is your DOM ready?  http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
    log('terminating; zero elements found by selector' + ($.isReady ? '' : ' (DOM not ready)'));
    return this;
  }

  // iterate the matched nodeset
  return this.each(function() {
    var opts = handleArguments(this, options, arg2);
    if (opts === false)
      return;

    opts.updateActivePagerLink = opts.updateActivePagerLink || $.fn.cycle.updateActivePagerLink;
    
    // stop existing slideshow for this container (if there is one)
    if (this.cycleTimeout)
      clearTimeout(this.cycleTimeout);
    this.cycleTimeout = this.cyclePause = 0;
    this.cycleStop = 0; // issue #108

    var $cont = $(this);
    var $slides = opts.slideExpr ? $(opts.slideExpr, this) : $cont.children();
    var els = $slides.get();

    if (els.length < 2) {
      log('terminating; too few slides: ' + els.length);
      return;
    }

    var opts2 = buildOptions($cont, $slides, els, opts, o);
    if (opts2 === false)
      return;

    var startTime = opts2.continuous ? 10 : getTimeout(els[opts2.currSlide], els[opts2.nextSlide], opts2, !opts2.backwards);

    // if it's an auto slideshow, kick it off
    if (startTime) {
      startTime += (opts2.delay || 0);
      if (startTime < 10)
        startTime = 10;
      debug('first timeout: ' + startTime);
      this.cycleTimeout = setTimeout(function(){go(els,opts2,0,!opts.backwards);}, startTime);
    }
  });
};

function triggerPause(cont, byHover, onPager) {
  var opts = $(cont).data('cycle.opts');
  if (!opts)
    return;
  var paused = !!cont.cyclePause;
  if (paused && opts.paused)
    opts.paused(cont, opts, byHover, onPager);
  else if (!paused && opts.resumed)
    opts.resumed(cont, opts, byHover, onPager);
}

// process the args that were passed to the plugin fn
function handleArguments(cont, options, arg2) {
  if (cont.cycleStop === undefined)
    cont.cycleStop = 0;
  if (options === undefined || options === null)
    options = {};
  if (options.constructor == String) {
    switch(options) {
    case 'destroy':
    case 'stop':
      var opts = $(cont).data('cycle.opts');
      if (!opts)
        return false;
      cont.cycleStop++; // callbacks look for change
      if (cont.cycleTimeout)
        clearTimeout(cont.cycleTimeout);
      cont.cycleTimeout = 0;
      if (opts.elements)
        $(opts.elements).stop();
      $(cont).removeData('cycle.opts');
      if (options == 'destroy')
        destroy(cont, opts);
      return false;
    case 'toggle':
      cont.cyclePause = (cont.cyclePause === 1) ? 0 : 1;
      checkInstantResume(cont.cyclePause, arg2, cont);
      triggerPause(cont);
      return false;
    case 'pause':
      cont.cyclePause = 1;
      triggerPause(cont);
      return false;
    case 'resume':
      cont.cyclePause = 0;
      checkInstantResume(false, arg2, cont);
      triggerPause(cont);
      return false;
    case 'prev':
    case 'next':
      opts = $(cont).data('cycle.opts');
      if (!opts) {
        log('options not found, "prev/next" ignored');
        return false;
      }
      if (typeof arg2 == 'string') 
        opts.oneTimeFx = arg2;
      $.fn.cycle[options](opts);
      return false;
    default:
      options = { fx: options };
    }
    return options;
  }
  else if (options.constructor == Number) {
    // go to the requested slide
    var num = options;
    options = $(cont).data('cycle.opts');
    if (!options) {
      log('options not found, can not advance slide');
      return false;
    }
    if (num < 0 || num >= options.elements.length) {
      log('invalid slide index: ' + num);
      return false;
    }
    options.nextSlide = num;
    if (cont.cycleTimeout) {
      clearTimeout(cont.cycleTimeout);
      cont.cycleTimeout = 0;
    }
    if (typeof arg2 == 'string')
      options.oneTimeFx = arg2;
    go(options.elements, options, 1, num >= options.currSlide);
    return false;
  }
  return options;
  
  function checkInstantResume(isPaused, arg2, cont) {
    if (!isPaused && arg2 === true) { // resume now!
      var options = $(cont).data('cycle.opts');
      if (!options) {
        log('options not found, can not resume');
        return false;
      }
      if (cont.cycleTimeout) {
        clearTimeout(cont.cycleTimeout);
        cont.cycleTimeout = 0;
      }
      go(options.elements, options, 1, !options.backwards);
    }
  }
}

function removeFilter(el, opts) {
  if (!$.support.opacity && opts.cleartype && el.style.filter) {
    try { el.style.removeAttribute('filter'); }
    catch(smother) {} // handle old opera versions
  }
}

// unbind event handlers
function destroy(cont, opts) {
  if (opts.next)
    $(opts.next).unbind(opts.prevNextEvent);
  if (opts.prev)
    $(opts.prev).unbind(opts.prevNextEvent);
  
  if (opts.pager || opts.pagerAnchorBuilder)
    $.each(opts.pagerAnchors || [], function() {
      this.unbind().remove();
    });
  opts.pagerAnchors = null;
  $(cont).unbind('mouseenter.cycle mouseleave.cycle');
  if (opts.destroy) // callback
    opts.destroy(opts);
}

// one-time initialization
function buildOptions($cont, $slides, els, options, o) {
  var startingSlideSpecified;
  // support metadata plugin (v1.0 and v2.0)
  var opts = $.extend({}, $.fn.cycle.defaults, options || {}, $.metadata ? $cont.metadata() : $.meta ? $cont.data() : {});
  var meta = $.isFunction($cont.data) ? $cont.data(opts.metaAttr) : null;
  if (meta)
    opts = $.extend(opts, meta);
  if (opts.autostop)
    opts.countdown = opts.autostopCount || els.length;

  var cont = $cont[0];
  $cont.data('cycle.opts', opts);
  opts.$cont = $cont;
  opts.stopCount = cont.cycleStop;
  opts.elements = els;
  opts.before = opts.before ? [opts.before] : [];
  opts.after = opts.after ? [opts.after] : [];

  // push some after callbacks
  if (!$.support.opacity && opts.cleartype)
    opts.after.push(function() { removeFilter(this, opts); });
  if (opts.continuous)
    opts.after.push(function() { go(els,opts,0,!opts.backwards); });

  saveOriginalOpts(opts);

  // clearType corrections
  if (!$.support.opacity && opts.cleartype && !opts.cleartypeNoBg)
    clearTypeFix($slides);

  // container requires non-static position so that slides can be position within
  if ($cont.css('position') == 'static')
    $cont.css('position', 'relative');
  if (opts.width)
    $cont.width(opts.width);
  if (opts.height && opts.height != 'auto')
    $cont.height(opts.height);

  if (opts.startingSlide !== undefined) {
    opts.startingSlide = parseInt(opts.startingSlide,10);
    if (opts.startingSlide >= els.length || opts.startSlide < 0)
      opts.startingSlide = 0; // catch bogus input
    else 
      startingSlideSpecified = true;
  }
  else if (opts.backwards)
    opts.startingSlide = els.length - 1;
  else
    opts.startingSlide = 0;

  // if random, mix up the slide array
  if (opts.random) {
    opts.randomMap = [];
    for (var i = 0; i < els.length; i++)
      opts.randomMap.push(i);
    opts.randomMap.sort(function(a,b) {return Math.random() - 0.5;});
    if (startingSlideSpecified) {
      // try to find the specified starting slide and if found set start slide index in the map accordingly
      for ( var cnt = 0; cnt < els.length; cnt++ ) {
        if ( opts.startingSlide == opts.randomMap[cnt] ) {
          opts.randomIndex = cnt;
        }
      }
    }
    else {
      opts.randomIndex = 1;
      opts.startingSlide = opts.randomMap[1];
    }
  }
  else if (opts.startingSlide >= els.length)
    opts.startingSlide = 0; // catch bogus input
  opts.currSlide = opts.startingSlide || 0;
  var first = opts.startingSlide;

  // set position and zIndex on all the slides
  $slides.css({position: 'absolute', top:0, left:0}).hide().each(function(i) {
    var z;
    if (opts.backwards)
      z = first ? i <= first ? els.length + (i-first) : first-i : els.length-i;
    else
      z = first ? i >= first ? els.length - (i-first) : first-i : els.length-i;
    $(this).css('z-index', z);
  });

  // make sure first slide is visible
  $(els[first]).css('opacity',1).show(); // opacity bit needed to handle restart use case
  removeFilter(els[first], opts);

  // stretch slides
  if (opts.fit) {
    if (!opts.aspect) {
          if (opts.width)
              $slides.width(opts.width);
          if (opts.height && opts.height != 'auto')
              $slides.height(opts.height);
    } else {
      $slides.each(function(){
        var $slide = $(this);
        var ratio = (opts.aspect === true) ? $slide.width()/$slide.height() : opts.aspect;
        if( opts.width && $slide.width() != opts.width ) {
          $slide.width( opts.width );
          $slide.height( opts.width / ratio );
        }

        if( opts.height && $slide.height() < opts.height ) {
          $slide.height( opts.height );
          $slide.width( opts.height * ratio );
        }
      });
    }
  }

  if (opts.center && ((!opts.fit) || opts.aspect)) {
    $slides.each(function(){
      var $slide = $(this);
      $slide.css({
        "margin-left": opts.width ?
          ((opts.width - $slide.width()) / 2) + "px" :
          0,
        "margin-top": opts.height ?
          ((opts.height - $slide.height()) / 2) + "px" :
          0
      });
    });
  }

  if (opts.center && !opts.fit && !opts.slideResize) {
    $slides.each(function(){
      var $slide = $(this);
      $slide.css({
        "margin-left": opts.width ? ((opts.width - $slide.width()) / 2) + "px" : 0,
        "margin-top": opts.height ? ((opts.height - $slide.height()) / 2) + "px" : 0
      });
    });
  }
    
  // stretch container
  var reshape = (opts.containerResize || opts.containerResizeHeight) && $cont.innerHeight() < 1;
  if (reshape) { // do this only if container has no size http://tinyurl.com/da2oa9
    var maxw = 0, maxh = 0;
    for(var j=0; j < els.length; j++) {
      var $e = $(els[j]), e = $e[0], w = $e.outerWidth(), h = $e.outerHeight();
      if (!w) w = e.offsetWidth || e.width || $e.attr('width');
      if (!h) h = e.offsetHeight || e.height || $e.attr('height');
      maxw = w > maxw ? w : maxw;
      maxh = h > maxh ? h : maxh;
    }
    if (opts.containerResize && maxw > 0 && maxh > 0)
      $cont.css({width:maxw+'px',height:maxh+'px'});
    if (opts.containerResizeHeight && maxh > 0)
      $cont.css({height:maxh+'px'});
  }

  var pauseFlag = false;  // https://github.com/malsup/cycle/issues/44
  if (opts.pause)
    $cont.bind('mouseenter.cycle', function(){
      pauseFlag = true;
      this.cyclePause++;
      triggerPause(cont, true);
    }).bind('mouseleave.cycle', function(){
        if (pauseFlag)
          this.cyclePause--;
        triggerPause(cont, true);
    });

  if (supportMultiTransitions(opts) === false)
    return false;

  // apparently a lot of people use image slideshows without height/width attributes on the images.
  // Cycle 2.50+ requires the sizing info for every slide; this block tries to deal with that.
  var requeue = false;
  options.requeueAttempts = options.requeueAttempts || 0;
  $slides.each(function() {
    // try to get height/width of each slide
    var $el = $(this);
    this.cycleH = (opts.fit && opts.height) ? opts.height : ($el.height() || this.offsetHeight || this.height || $el.attr('height') || 0);
    this.cycleW = (opts.fit && opts.width) ? opts.width : ($el.width() || this.offsetWidth || this.width || $el.attr('width') || 0);

    if ( $el.is('img') ) {
      var loading = (this.cycleH === 0 && this.cycleW === 0 && !this.complete);
      // don't requeue for images that are still loading but have a valid size
      if (loading) {
        if (o.s && opts.requeueOnImageNotLoaded && ++options.requeueAttempts < 100) { // track retry count so we don't loop forever
          log(options.requeueAttempts,' - img slide not loaded, requeuing slideshow: ', this.src, this.cycleW, this.cycleH);
          setTimeout(function() {$(o.s,o.c).cycle(options);}, opts.requeueTimeout);
          requeue = true;
          return false; // break each loop
        }
        else {
          log('could not determine size of image: '+this.src, this.cycleW, this.cycleH);
        }
      }
    }
    return true;
  });

  if (requeue)
    return false;

  opts.cssBefore = opts.cssBefore || {};
  opts.cssAfter = opts.cssAfter || {};
  opts.cssFirst = opts.cssFirst || {};
  opts.animIn = opts.animIn || {};
  opts.animOut = opts.animOut || {};

  $slides.not(':eq('+first+')').css(opts.cssBefore);
  $($slides[first]).css(opts.cssFirst);

  if (opts.timeout) {
    opts.timeout = parseInt(opts.timeout,10);
    // ensure that timeout and speed settings are sane
    if (opts.speed.constructor == String)
      opts.speed = $.fx.speeds[opts.speed] || parseInt(opts.speed,10);
    if (!opts.sync)
      opts.speed = opts.speed / 2;
    
    var buffer = opts.fx == 'none' ? 0 : opts.fx == 'shuffle' ? 500 : 250;
    while((opts.timeout - opts.speed) < buffer) // sanitize timeout
      opts.timeout += opts.speed;
  }
  if (opts.easing)
    opts.easeIn = opts.easeOut = opts.easing;
  if (!opts.speedIn)
    opts.speedIn = opts.speed;
  if (!opts.speedOut)
    opts.speedOut = opts.speed;

  opts.slideCount = els.length;
  opts.currSlide = opts.lastSlide = first;
  if (opts.random) {
    if (++opts.randomIndex == els.length)
      opts.randomIndex = 0;
    opts.nextSlide = opts.randomMap[opts.randomIndex];
  }
  else if (opts.backwards)
    opts.nextSlide = opts.startingSlide === 0 ? (els.length-1) : opts.startingSlide-1;
  else
    opts.nextSlide = opts.startingSlide >= (els.length-1) ? 0 : opts.startingSlide+1;

  // run transition init fn
  if (!opts.multiFx) {
    var init = $.fn.cycle.transitions[opts.fx];
    if ($.isFunction(init))
      init($cont, $slides, opts);
    else if (opts.fx != 'custom' && !opts.multiFx) {
      log('unknown transition: ' + opts.fx,'; slideshow terminating');
      return false;
    }
  }

  // fire artificial events
  var e0 = $slides[first];
  if (!opts.skipInitializationCallbacks) {
    if (opts.before.length)
      opts.before[0].apply(e0, [e0, e0, opts, true]);
    if (opts.after.length)
      opts.after[0].apply(e0, [e0, e0, opts, true]);
  }
  if (opts.next)
    $(opts.next).bind(opts.prevNextEvent,function(){return advance(opts,1);});
  if (opts.prev)
    $(opts.prev).bind(opts.prevNextEvent,function(){return advance(opts,0);});
  if (opts.pager || opts.pagerAnchorBuilder)
    buildPager(els,opts);

  exposeAddSlide(opts, els);

  return opts;
}

// save off original opts so we can restore after clearing state
function saveOriginalOpts(opts) {
  opts.original = { before: [], after: [] };
  opts.original.cssBefore = $.extend({}, opts.cssBefore);
  opts.original.cssAfter  = $.extend({}, opts.cssAfter);
  opts.original.animIn  = $.extend({}, opts.animIn);
  opts.original.animOut   = $.extend({}, opts.animOut);
  $.each(opts.before, function() { opts.original.before.push(this); });
  $.each(opts.after,  function() { opts.original.after.push(this); });
}

function supportMultiTransitions(opts) {
  var i, tx, txs = $.fn.cycle.transitions;
  // look for multiple effects
  if (opts.fx.indexOf(',') > 0) {
    opts.multiFx = true;
    opts.fxs = opts.fx.replace(/\s*/g,'').split(',');
    // discard any bogus effect names
    for (i=0; i < opts.fxs.length; i++) {
      var fx = opts.fxs[i];
      tx = txs[fx];
      if (!tx || !txs.hasOwnProperty(fx) || !$.isFunction(tx)) {
        log('discarding unknown transition: ',fx);
        opts.fxs.splice(i,1);
        i--;
      }
    }
    // if we have an empty list then we threw everything away!
    if (!opts.fxs.length) {
      log('No valid transitions named; slideshow terminating.');
      return false;
    }
  }
  else if (opts.fx == 'all') {  // auto-gen the list of transitions
    opts.multiFx = true;
    opts.fxs = [];
    for (var p in txs) {
      if (txs.hasOwnProperty(p)) {
        tx = txs[p];
        if (txs.hasOwnProperty(p) && $.isFunction(tx))
          opts.fxs.push(p);
      }
    }
  }
  if (opts.multiFx && opts.randomizeEffects) {
    // munge the fxs array to make effect selection random
    var r1 = Math.floor(Math.random() * 20) + 30;
    for (i = 0; i < r1; i++) {
      var r2 = Math.floor(Math.random() * opts.fxs.length);
      opts.fxs.push(opts.fxs.splice(r2,1)[0]);
    }
    debug('randomized fx sequence: ',opts.fxs);
  }
  return true;
}

// provide a mechanism for adding slides after the slideshow has started
function exposeAddSlide(opts, els) {
  opts.addSlide = function(newSlide, prepend) {
    var $s = $(newSlide), s = $s[0];
    if (!opts.autostopCount)
      opts.countdown++;
    els[prepend?'unshift':'push'](s);
    if (opts.els)
      opts.els[prepend?'unshift':'push'](s); // shuffle needs this
    opts.slideCount = els.length;

    // add the slide to the random map and resort
    if (opts.random) {
      opts.randomMap.push(opts.slideCount-1);
      opts.randomMap.sort(function(a,b) {return Math.random() - 0.5;});
    }

    $s.css('position','absolute');
    $s[prepend?'prependTo':'appendTo'](opts.$cont);

    if (prepend) {
      opts.currSlide++;
      opts.nextSlide++;
    }

    if (!$.support.opacity && opts.cleartype && !opts.cleartypeNoBg)
      clearTypeFix($s);

    if (opts.fit && opts.width)
      $s.width(opts.width);
    if (opts.fit && opts.height && opts.height != 'auto')
      $s.height(opts.height);
    s.cycleH = (opts.fit && opts.height) ? opts.height : $s.height();
    s.cycleW = (opts.fit && opts.width) ? opts.width : $s.width();

    $s.css(opts.cssBefore);

    if (opts.pager || opts.pagerAnchorBuilder)
      $.fn.cycle.createPagerAnchor(els.length-1, s, $(opts.pager), els, opts);

    if ($.isFunction(opts.onAddSlide))
      opts.onAddSlide($s);
    else
      $s.hide(); // default behavior
  };
}

// reset internal state; we do this on every pass in order to support multiple effects
$.fn.cycle.resetState = function(opts, fx) {
  fx = fx || opts.fx;
  opts.before = []; opts.after = [];
  opts.cssBefore = $.extend({}, opts.original.cssBefore);
  opts.cssAfter  = $.extend({}, opts.original.cssAfter);
  opts.animIn = $.extend({}, opts.original.animIn);
  opts.animOut   = $.extend({}, opts.original.animOut);
  opts.fxFn = null;
  $.each(opts.original.before, function() { opts.before.push(this); });
  $.each(opts.original.after,  function() { opts.after.push(this); });

  // re-init
  var init = $.fn.cycle.transitions[fx];
  if ($.isFunction(init))
    init(opts.$cont, $(opts.elements), opts);
};

// this is the main engine fn, it handles the timeouts, callbacks and slide index mgmt
function go(els, opts, manual, fwd) {
  var p = opts.$cont[0], curr = els[opts.currSlide], next = els[opts.nextSlide];

  // opts.busy is true if we're in the middle of an animation
  if (manual && opts.busy && opts.manualTrump) {
    // let manual transitions requests trump active ones
    debug('manualTrump in go(), stopping active transition');
    $(els).stop(true,true);
    opts.busy = 0;
    clearTimeout(p.cycleTimeout);
  }

  // don't begin another timeout-based transition if there is one active
  if (opts.busy) {
    debug('transition active, ignoring new tx request');
    return;
  }


  // stop cycling if we have an outstanding stop request
  if (p.cycleStop != opts.stopCount || p.cycleTimeout === 0 && !manual)
    return;

  // check to see if we should stop cycling based on autostop options
  if (!manual && !p.cyclePause && !opts.bounce &&
    ((opts.autostop && (--opts.countdown <= 0)) ||
    (opts.nowrap && !opts.random && opts.nextSlide < opts.currSlide))) {
    if (opts.end)
      opts.end(opts);
    return;
  }

  // if slideshow is paused, only transition on a manual trigger
  var changed = false;
  if ((manual || !p.cyclePause) && (opts.nextSlide != opts.currSlide)) {
    changed = true;
    var fx = opts.fx;
    // keep trying to get the slide size if we don't have it yet
    curr.cycleH = curr.cycleH || $(curr).height();
    curr.cycleW = curr.cycleW || $(curr).width();
    next.cycleH = next.cycleH || $(next).height();
    next.cycleW = next.cycleW || $(next).width();

    // support multiple transition types
    if (opts.multiFx) {
      if (fwd && (opts.lastFx === undefined || ++opts.lastFx >= opts.fxs.length))
        opts.lastFx = 0;
      else if (!fwd && (opts.lastFx === undefined || --opts.lastFx < 0))
        opts.lastFx = opts.fxs.length - 1;
      fx = opts.fxs[opts.lastFx];
    }

    // one-time fx overrides apply to:  $('div').cycle(3,'zoom');
    if (opts.oneTimeFx) {
      fx = opts.oneTimeFx;
      opts.oneTimeFx = null;
    }

    $.fn.cycle.resetState(opts, fx);

    // run the before callbacks
    if (opts.before.length)
      $.each(opts.before, function(i,o) {
        if (p.cycleStop != opts.stopCount) return;
        o.apply(next, [curr, next, opts, fwd]);
      });

    // stage the after callacks
    var after = function() {
      opts.busy = 0;
      $.each(opts.after, function(i,o) {
        if (p.cycleStop != opts.stopCount) return;
        o.apply(next, [curr, next, opts, fwd]);
      });
      if (!p.cycleStop) {
        // queue next transition
        queueNext();
      }
    };

    debug('tx firing('+fx+'); currSlide: ' + opts.currSlide + '; nextSlide: ' + opts.nextSlide);
    
    // get ready to perform the transition
    opts.busy = 1;
    if (opts.fxFn) // fx function provided?
      opts.fxFn(curr, next, opts, after, fwd, manual && opts.fastOnEvent);
    else if ($.isFunction($.fn.cycle[opts.fx])) // fx plugin ?
      $.fn.cycle[opts.fx](curr, next, opts, after, fwd, manual && opts.fastOnEvent);
    else
      $.fn.cycle.custom(curr, next, opts, after, fwd, manual && opts.fastOnEvent);
  }
  else {
    queueNext();
  }

  if (changed || opts.nextSlide == opts.currSlide) {
    // calculate the next slide
    var roll;
    opts.lastSlide = opts.currSlide;
    if (opts.random) {
      opts.currSlide = opts.nextSlide;
      if (++opts.randomIndex == els.length) {
        opts.randomIndex = 0;
        opts.randomMap.sort(function(a,b) {return Math.random() - 0.5;});
      }
      opts.nextSlide = opts.randomMap[opts.randomIndex];
      if (opts.nextSlide == opts.currSlide)
        opts.nextSlide = (opts.currSlide == opts.slideCount - 1) ? 0 : opts.currSlide + 1;
    }
    else if (opts.backwards) {
      roll = (opts.nextSlide - 1) < 0;
      if (roll && opts.bounce) {
        opts.backwards = !opts.backwards;
        opts.nextSlide = 1;
        opts.currSlide = 0;
      }
      else {
        opts.nextSlide = roll ? (els.length-1) : opts.nextSlide-1;
        opts.currSlide = roll ? 0 : opts.nextSlide+1;
      }
    }
    else { // sequence
      roll = (opts.nextSlide + 1) == els.length;
      if (roll && opts.bounce) {
        opts.backwards = !opts.backwards;
        opts.nextSlide = els.length-2;
        opts.currSlide = els.length-1;
      }
      else {
        opts.nextSlide = roll ? 0 : opts.nextSlide+1;
        opts.currSlide = roll ? els.length-1 : opts.nextSlide-1;
      }
    }
  }
  if (changed && opts.pager)
    opts.updateActivePagerLink(opts.pager, opts.currSlide, opts.activePagerClass);
  
  function queueNext() {
    // stage the next transition
    var ms = 0, timeout = opts.timeout;
    if (opts.timeout && !opts.continuous) {
      ms = getTimeout(els[opts.currSlide], els[opts.nextSlide], opts, fwd);
         if (opts.fx == 'shuffle')
            ms -= opts.speedOut;
      }
    else if (opts.continuous && p.cyclePause) // continuous shows work off an after callback, not this timer logic
      ms = 10;
    if (ms > 0)
      p.cycleTimeout = setTimeout(function(){ go(els, opts, 0, !opts.backwards); }, ms);
  }
}

// invoked after transition
$.fn.cycle.updateActivePagerLink = function(pager, currSlide, clsName) {
   $(pager).each(function() {
       $(this).children().removeClass(clsName).eq(currSlide).addClass(clsName);
   });
};

// calculate timeout value for current transition
function getTimeout(curr, next, opts, fwd) {
  if (opts.timeoutFn) {
    // call user provided calc fn
    var t = opts.timeoutFn.call(curr,curr,next,opts,fwd);
    while (opts.fx != 'none' && (t - opts.speed) < 250) // sanitize timeout
      t += opts.speed;
    debug('calculated timeout: ' + t + '; speed: ' + opts.speed);
    if (t !== false)
      return t;
  }
  return opts.timeout;
}

// expose next/prev function, caller must pass in state
$.fn.cycle.next = function(opts) { advance(opts,1); };
$.fn.cycle.prev = function(opts) { advance(opts,0);};

// advance slide forward or back
function advance(opts, moveForward) {
  var val = moveForward ? 1 : -1;
  var els = opts.elements;
  var p = opts.$cont[0], timeout = p.cycleTimeout;
  if (timeout) {
    clearTimeout(timeout);
    p.cycleTimeout = 0;
  }
  if (opts.random && val < 0) {
    // move back to the previously display slide
    opts.randomIndex--;
    if (--opts.randomIndex == -2)
      opts.randomIndex = els.length-2;
    else if (opts.randomIndex == -1)
      opts.randomIndex = els.length-1;
    opts.nextSlide = opts.randomMap[opts.randomIndex];
  }
  else if (opts.random) {
    opts.nextSlide = opts.randomMap[opts.randomIndex];
  }
  else {
    opts.nextSlide = opts.currSlide + val;
    if (opts.nextSlide < 0) {
      if (opts.nowrap) return false;
      opts.nextSlide = els.length - 1;
    }
    else if (opts.nextSlide >= els.length) {
      if (opts.nowrap) return false;
      opts.nextSlide = 0;
    }
  }

  var cb = opts.onPrevNextEvent || opts.prevNextClick; // prevNextClick is deprecated
  if ($.isFunction(cb))
    cb(val > 0, opts.nextSlide, els[opts.nextSlide]);
  go(els, opts, 1, moveForward);
  return false;
}

function buildPager(els, opts) {
  var $p = $(opts.pager);
  $.each(els, function(i,o) {
    $.fn.cycle.createPagerAnchor(i,o,$p,els,opts);
  });
  opts.updateActivePagerLink(opts.pager, opts.startingSlide, opts.activePagerClass);
}

$.fn.cycle.createPagerAnchor = function(i, el, $p, els, opts) {
  var a;
  if ($.isFunction(opts.pagerAnchorBuilder)) {
    a = opts.pagerAnchorBuilder(i,el);
    debug('pagerAnchorBuilder('+i+', el) returned: ' + a);
  }
  else
    a = '<a href="#">'+(i+1)+'</a>';
    
  if (!a)
    return;
  var $a = $(a);
  // don't reparent if anchor is in the dom
  if ($a.parents('body').length === 0) {
    var arr = [];
    if ($p.length > 1) {
      $p.each(function() {
        var $clone = $a.clone(true);
        $(this).append($clone);
        arr.push($clone[0]);
      });
      $a = $(arr);
    }
    else {
      $a.appendTo($p);
    }
  }

  opts.pagerAnchors =  opts.pagerAnchors || [];
  opts.pagerAnchors.push($a);
  
  var pagerFn = function(e) {
    e.preventDefault();
    opts.nextSlide = i;
    var p = opts.$cont[0], timeout = p.cycleTimeout;
    if (timeout) {
      clearTimeout(timeout);
      p.cycleTimeout = 0;
    }
    var cb = opts.onPagerEvent || opts.pagerClick; // pagerClick is deprecated
    if ($.isFunction(cb))
      cb(opts.nextSlide, els[opts.nextSlide]);
    go(els,opts,1,opts.currSlide < i); // trigger the trans
//    return false; // <== allow bubble
  };
  
  if ( /mouseenter|mouseover/i.test(opts.pagerEvent) ) {
    $a.hover(pagerFn, function(){/* no-op */} );
  }
  else {
    $a.bind(opts.pagerEvent, pagerFn);
  }
  
  if ( ! /^click/.test(opts.pagerEvent) && !opts.allowPagerClickBubble)
    $a.bind('click.cycle', function(){return false;}); // suppress click
  
  var cont = opts.$cont[0];
  var pauseFlag = false; // https://github.com/malsup/cycle/issues/44
  if (opts.pauseOnPagerHover) {
    $a.hover(
      function() { 
        pauseFlag = true;
        cont.cyclePause++; 
        triggerPause(cont,true,true);
      }, function() { 
        if (pauseFlag)
          cont.cyclePause--; 
        triggerPause(cont,true,true);
      } 
    );
  }
};

// helper fn to calculate the number of slides between the current and the next
$.fn.cycle.hopsFromLast = function(opts, fwd) {
  var hops, l = opts.lastSlide, c = opts.currSlide;
  if (fwd)
    hops = c > l ? c - l : opts.slideCount - l;
  else
    hops = c < l ? l - c : l + opts.slideCount - c;
  return hops;
};

// fix clearType problems in ie6 by setting an explicit bg color
// (otherwise text slides look horrible during a fade transition)
function clearTypeFix($slides) {
  debug('applying clearType background-color hack');
  function hex(s) {
    s = parseInt(s,10).toString(16);
    return s.length < 2 ? '0'+s : s;
  }
  function getBg(e) {
    for ( ; e && e.nodeName.toLowerCase() != 'html'; e = e.parentNode) {
      var v = $.css(e,'background-color');
      if (v && v.indexOf('rgb') >= 0 ) {
        var rgb = v.match(/\d+/g);
        return '#'+ hex(rgb[0]) + hex(rgb[1]) + hex(rgb[2]);
      }
      if (v && v != 'transparent')
        return v;
    }
    return '#ffffff';
  }
  $slides.each(function() { $(this).css('background-color', getBg(this)); });
}

// reset common props before the next transition
$.fn.cycle.commonReset = function(curr,next,opts,w,h,rev) {
  $(opts.elements).not(curr).hide();
  if (typeof opts.cssBefore.opacity == 'undefined')
    opts.cssBefore.opacity = 1;
  opts.cssBefore.display = 'block';
  if (opts.slideResize && w !== false && next.cycleW > 0)
    opts.cssBefore.width = next.cycleW;
  if (opts.slideResize && h !== false && next.cycleH > 0)
    opts.cssBefore.height = next.cycleH;
  opts.cssAfter = opts.cssAfter || {};
  opts.cssAfter.display = 'none';
  $(curr).css('zIndex',opts.slideCount + (rev === true ? 1 : 0));
  $(next).css('zIndex',opts.slideCount + (rev === true ? 0 : 1));
};

// the actual fn for effecting a transition
$.fn.cycle.custom = function(curr, next, opts, cb, fwd, speedOverride) {
  var $l = $(curr), $n = $(next);
  var speedIn = opts.speedIn, speedOut = opts.speedOut, easeIn = opts.easeIn, easeOut = opts.easeOut, animInDelay = opts.animInDelay, animOutDelay = opts.animOutDelay;
  $n.css(opts.cssBefore);
  if (speedOverride) {
    if (typeof speedOverride == 'number')
      speedIn = speedOut = speedOverride;
    else
      speedIn = speedOut = 1;
    easeIn = easeOut = null;
  }
  var fn = function() {
    $n.delay(animInDelay).animate(opts.animIn, speedIn, easeIn, function() {
      cb();
    });
  };
  $l.delay(animOutDelay).animate(opts.animOut, speedOut, easeOut, function() {
    $l.css(opts.cssAfter);
    if (!opts.sync) 
      fn();
  });
  if (opts.sync) fn();
};

// transition definitions - only fade is defined here, transition pack defines the rest
$.fn.cycle.transitions = {
  fade: function($cont, $slides, opts) {
    $slides.not(':eq('+opts.currSlide+')').css('opacity',0);
    opts.before.push(function(curr,next,opts) {
      $.fn.cycle.commonReset(curr,next,opts);
      opts.cssBefore.opacity = 0;
    });
    opts.animIn    = { opacity: 1 };
    opts.animOut   = { opacity: 0 };
    opts.cssBefore = { top: 0, left: 0 };
  }
};

$.fn.cycle.ver = function() { return ver; };

// override these globally if you like (they are all optional)
$.fn.cycle.defaults = {
    activePagerClass: 'activeSlide', // class name used for the active pager link
    after:            null,     // transition callback (scope set to element that was shown):  function(currSlideElement, nextSlideElement, options, forwardFlag)
    allowPagerClickBubble: false, // allows or prevents click event on pager anchors from bubbling
    animIn:           null,     // properties that define how the slide animates in
    animInDelay:      0,        // allows delay before next slide transitions in  
    animOut:          null,     // properties that define how the slide animates out
    animOutDelay:     0,        // allows delay before current slide transitions out
    aspect:           false,    // preserve aspect ratio during fit resizing, cropping if necessary (must be used with fit option)
    autostop:         0,        // true to end slideshow after X transitions (where X == slide count)
    autostopCount:    0,        // number of transitions (optionally used with autostop to define X)
    backwards:        false,    // true to start slideshow at last slide and move backwards through the stack
    before:           null,     // transition callback (scope set to element to be shown):     function(currSlideElement, nextSlideElement, options, forwardFlag)
    center:           null,     // set to true to have cycle add top/left margin to each slide (use with width and height options)
    cleartype:        !$.support.opacity,  // true if clearType corrections should be applied (for IE)
    cleartypeNoBg:    false,    // set to true to disable extra cleartype fixing (leave false to force background color setting on slides)
    containerResize:  1,        // resize container to fit largest slide
    containerResizeHeight:  0,  // resize containers height to fit the largest slide but leave the width dynamic
    continuous:       0,        // true to start next transition immediately after current one completes
    cssAfter:         null,     // properties that defined the state of the slide after transitioning out
    cssBefore:        null,     // properties that define the initial state of the slide before transitioning in
    delay:            0,        // additional delay (in ms) for first transition (hint: can be negative)
    easeIn:           null,     // easing for "in" transition
    easeOut:          null,     // easing for "out" transition
    easing:           null,     // easing method for both in and out transitions
    end:              null,     // callback invoked when the slideshow terminates (use with autostop or nowrap options): function(options)
    fastOnEvent:      0,        // force fast transitions when triggered manually (via pager or prev/next); value == time in ms
    fit:              0,        // force slides to fit container
    fx:               'fade',   // name of transition effect (or comma separated names, ex: 'fade,scrollUp,shuffle')
    fxFn:             null,     // function used to control the transition: function(currSlideElement, nextSlideElement, options, afterCalback, forwardFlag)
    height:           'auto',   // container height (if the 'fit' option is true, the slides will be set to this height as well)
    manualTrump:      true,     // causes manual transition to stop an active transition instead of being ignored
    metaAttr:         'cycle',  // data- attribute that holds the option data for the slideshow
    next:             null,     // element, jQuery object, or jQuery selector string for the element to use as event trigger for next slide
    nowrap:           0,        // true to prevent slideshow from wrapping
    onPagerEvent:     null,     // callback fn for pager events: function(zeroBasedSlideIndex, slideElement)
    onPrevNextEvent:  null,     // callback fn for prev/next events: function(isNext, zeroBasedSlideIndex, slideElement)
    pager:            null,     // element, jQuery object, or jQuery selector string for the element to use as pager container
    pagerAnchorBuilder: null,   // callback fn for building anchor links:  function(index, DOMelement)
    pagerEvent:       'click.cycle', // name of event which drives the pager navigation
    pause:            0,        // true to enable "pause on hover"
    pauseOnPagerHover: 0,       // true to pause when hovering over pager link
    prev:             null,     // element, jQuery object, or jQuery selector string for the element to use as event trigger for previous slide
    prevNextEvent:    'click.cycle',// event which drives the manual transition to the previous or next slide
    random:           0,        // true for random, false for sequence (not applicable to shuffle fx)
    randomizeEffects: 1,        // valid when multiple effects are used; true to make the effect sequence random
    requeueOnImageNotLoaded: true, // requeue the slideshow if any image slides are not yet loaded
    requeueTimeout:   250,      // ms delay for requeue
    rev:              0,        // causes animations to transition in reverse (for effects that support it such as scrollHorz/scrollVert/shuffle)
    shuffle:          null,     // coords for shuffle animation, ex: { top:15, left: 200 }
    skipInitializationCallbacks: false, // set to true to disable the first before/after callback that occurs prior to any transition
    slideExpr:        null,     // expression for selecting slides (if something other than all children is required)
    slideResize:      1,        // force slide width/height to fixed size before every transition
    speed:            1000,     // speed of the transition (any valid fx speed value)
    speedIn:          null,     // speed of the 'in' transition
    speedOut:         null,     // speed of the 'out' transition
    startingSlide:    undefined,// zero-based index of the first slide to be displayed
    sync:             1,        // true if in/out transitions should occur simultaneously
    timeout:          4000,     // milliseconds between slide transitions (0 to disable auto advance)
    timeoutFn:        null,     // callback for determining per-slide timeout value:  function(currSlideElement, nextSlideElement, options, forwardFlag)
    updateActivePagerLink: null,// callback fn invoked to update the active pager link (adds/removes activePagerClass style)
    width:            null      // container width (if the 'fit' option is true, the slides will be set to this width as well)
};

})(jQuery);


/*!
 * jQuery Cycle Plugin Transition Definitions
 * This script is a plugin for the jQuery Cycle Plugin
 * Examples and documentation at: http://malsup.com/jquery/cycle/
 * Copyright (c) 2007-2010 M. Alsup
 * Version:  2.73
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 */
(function($) {
"use strict";

//
// These functions define slide initialization and properties for the named
// transitions. To save file size feel free to remove any of these that you
// don't need.
//
$.fn.cycle.transitions.none = function($cont, $slides, opts) {
  opts.fxFn = function(curr,next,opts,after){
    $(next).show();
    $(curr).hide();
    after();
  };
};

// not a cross-fade, fadeout only fades out the top slide
$.fn.cycle.transitions.fadeout = function($cont, $slides, opts) {
  $slides.not(':eq('+opts.currSlide+')').css({ display: 'block', 'opacity': 1 });
  opts.before.push(function(curr,next,opts,w,h,rev) {
    $(curr).css('zIndex',opts.slideCount + (rev !== true ? 1 : 0));
    $(next).css('zIndex',opts.slideCount + (rev !== true ? 0 : 1));
  });
  opts.animIn.opacity = 1;
  opts.animOut.opacity = 0;
  opts.cssBefore.opacity = 1;
  opts.cssBefore.display = 'block';
  opts.cssAfter.zIndex = 0;
};

// scrollUp/Down/Left/Right
$.fn.cycle.transitions.scrollUp = function($cont, $slides, opts) {
  $cont.css('overflow','hidden');
  opts.before.push($.fn.cycle.commonReset);
  var h = $cont.height();
  opts.cssBefore.top = h;
  opts.cssBefore.left = 0;
  opts.cssFirst.top = 0;
  opts.animIn.top = 0;
  opts.animOut.top = -h;
};
$.fn.cycle.transitions.scrollDown = function($cont, $slides, opts) {
  $cont.css('overflow','hidden');
  opts.before.push($.fn.cycle.commonReset);
  var h = $cont.height();
  opts.cssFirst.top = 0;
  opts.cssBefore.top = -h;
  opts.cssBefore.left = 0;
  opts.animIn.top = 0;
  opts.animOut.top = h;
};
$.fn.cycle.transitions.scrollLeft = function($cont, $slides, opts) {
  $cont.css('overflow','hidden');
  opts.before.push($.fn.cycle.commonReset);
  var w = $cont.width();
  opts.cssFirst.left = 0;
  opts.cssBefore.left = w;
  opts.cssBefore.top = 0;
  opts.animIn.left = 0;
  opts.animOut.left = 0-w;
};
$.fn.cycle.transitions.scrollRight = function($cont, $slides, opts) {
  $cont.css('overflow','hidden');
  opts.before.push($.fn.cycle.commonReset);
  var w = $cont.width();
  opts.cssFirst.left = 0;
  opts.cssBefore.left = -w;
  opts.cssBefore.top = 0;
  opts.animIn.left = 0;
  opts.animOut.left = w;
};
$.fn.cycle.transitions.scrollHorz = function($cont, $slides, opts) {
  $cont.css('overflow','hidden').width();
  opts.before.push(function(curr, next, opts, fwd) {
    if (opts.rev)
      fwd = !fwd;
    $.fn.cycle.commonReset(curr,next,opts);
    opts.cssBefore.left = fwd ? (next.cycleW-1) : (1-next.cycleW);
    opts.animOut.left = fwd ? -curr.cycleW : curr.cycleW;
  });
  opts.cssFirst.left = 0;
  opts.cssBefore.top = 0;
  opts.animIn.left = 0;
  opts.animOut.top = 0;
};
$.fn.cycle.transitions.scrollVert = function($cont, $slides, opts) {
  $cont.css('overflow','hidden');
  opts.before.push(function(curr, next, opts, fwd) {
    if (opts.rev)
      fwd = !fwd;
    $.fn.cycle.commonReset(curr,next,opts);
    opts.cssBefore.top = fwd ? (1-next.cycleH) : (next.cycleH-1);
    opts.animOut.top = fwd ? curr.cycleH : -curr.cycleH;
  });
  opts.cssFirst.top = 0;
  opts.cssBefore.left = 0;
  opts.animIn.top = 0;
  opts.animOut.left = 0;
};

// slideX/slideY
$.fn.cycle.transitions.slideX = function($cont, $slides, opts) {
  opts.before.push(function(curr, next, opts) {
    $(opts.elements).not(curr).hide();
    $.fn.cycle.commonReset(curr,next,opts,false,true);
    opts.animIn.width = next.cycleW;
  });
  opts.cssBefore.left = 0;
  opts.cssBefore.top = 0;
  opts.cssBefore.width = 0;
  opts.animIn.width = 'show';
  opts.animOut.width = 0;
};
$.fn.cycle.transitions.slideY = function($cont, $slides, opts) {
  opts.before.push(function(curr, next, opts) {
    $(opts.elements).not(curr).hide();
    $.fn.cycle.commonReset(curr,next,opts,true,false);
    opts.animIn.height = next.cycleH;
  });
  opts.cssBefore.left = 0;
  opts.cssBefore.top = 0;
  opts.cssBefore.height = 0;
  opts.animIn.height = 'show';
  opts.animOut.height = 0;
};

// shuffle
$.fn.cycle.transitions.shuffle = function($cont, $slides, opts) {
  var i, w = $cont.css('overflow', 'visible').width();
  $slides.css({left: 0, top: 0});
  opts.before.push(function(curr,next,opts) {
    $.fn.cycle.commonReset(curr,next,opts,true,true,true);
  });
  // only adjust speed once!
  if (!opts.speedAdjusted) {
    opts.speed = opts.speed / 2; // shuffle has 2 transitions
    opts.speedAdjusted = true;
  }
  opts.random = 0;
  opts.shuffle = opts.shuffle || {left:-w, top:15};
  opts.els = [];
  for (i=0; i < $slides.length; i++)
    opts.els.push($slides[i]);

  for (i=0; i < opts.currSlide; i++)
    opts.els.push(opts.els.shift());

  // custom transition fn (hat tip to Benjamin Sterling for this bit of sweetness!)
  opts.fxFn = function(curr, next, opts, cb, fwd) {
    if (opts.rev)
      fwd = !fwd;
    var $el = fwd ? $(curr) : $(next);
    $(next).css(opts.cssBefore);
    var count = opts.slideCount;
    $el.animate(opts.shuffle, opts.speedIn, opts.easeIn, function() {
      var hops = $.fn.cycle.hopsFromLast(opts, fwd);
      for (var k=0; k < hops; k++) {
        if (fwd)
          opts.els.push(opts.els.shift());
        else
          opts.els.unshift(opts.els.pop());
      }
      if (fwd) {
        for (var i=0, len=opts.els.length; i < len; i++)
          $(opts.els[i]).css('z-index', len-i+count);
      }
      else {
        var z = $(curr).css('z-index');
        $el.css('z-index', parseInt(z,10)+1+count);
      }
      $el.animate({left:0, top:0}, opts.speedOut, opts.easeOut, function() {
        $(fwd ? this : curr).hide();
        if (cb) cb();
      });
    });
  };
  $.extend(opts.cssBefore, { display: 'block', opacity: 1, top: 0, left: 0 });
};

// turnUp/Down/Left/Right
/*$.fn.cycle.transitions.turnUp = function($cont, $slides, opts) {
  opts.before.push(function(curr, next, opts) {
    $.fn.cycle.commonReset(curr,next,opts,true,false);
    opts.cssBefore.top = next.cycleH;
    opts.animIn.height = next.cycleH;
    opts.animOut.width = next.cycleW;
  });
  opts.cssFirst.top = 0;
  opts.cssBefore.left = 0;
  opts.cssBefore.height = 0;
  opts.animIn.top = 0;
  opts.animOut.height = 0;
};
$.fn.cycle.transitions.turnDown = function($cont, $slides, opts) {
  opts.before.push(function(curr, next, opts) {
    $.fn.cycle.commonReset(curr,next,opts,true,false);
    opts.animIn.height = next.cycleH;
    opts.animOut.top   = curr.cycleH;
  });
  opts.cssFirst.top = 0;
  opts.cssBefore.left = 0;
  opts.cssBefore.top = 0;
  opts.cssBefore.height = 0;
  opts.animOut.height = 0;
};
$.fn.cycle.transitions.turnLeft = function($cont, $slides, opts) {
  opts.before.push(function(curr, next, opts) {
    $.fn.cycle.commonReset(curr,next,opts,false,true);
    opts.cssBefore.left = next.cycleW;
    opts.animIn.width = next.cycleW;
  });
  opts.cssBefore.top = 0;
  opts.cssBefore.width = 0;
  opts.animIn.left = 0;
  opts.animOut.width = 0;
};
$.fn.cycle.transitions.turnRight = function($cont, $slides, opts) {
  opts.before.push(function(curr, next, opts) {
    $.fn.cycle.commonReset(curr,next,opts,false,true);
    opts.animIn.width = next.cycleW;
    opts.animOut.left = curr.cycleW;
  });
  $.extend(opts.cssBefore, { top: 0, left: 0, width: 0 });
  opts.animIn.left = 0;
  opts.animOut.width = 0;
};
*/
// zoom
$.fn.cycle.transitions.zoom = function($cont, $slides, opts) {
  opts.before.push(function(curr, next, opts) {
    $.fn.cycle.commonReset(curr,next,opts,false,false,true);
    opts.cssBefore.top = next.cycleH/2;
    opts.cssBefore.left = next.cycleW/2;
    $.extend(opts.animIn, { top: 0, left: 0, width: next.cycleW, height: next.cycleH });
    $.extend(opts.animOut, { width: 0, height: 0, top: curr.cycleH/2, left: curr.cycleW/2 });
  });
  opts.cssFirst.top = 0;
  opts.cssFirst.left = 0;
  opts.cssBefore.width = 0;
  opts.cssBefore.height = 0;
};

// fadeZoom
$.fn.cycle.transitions.fadeZoom = function($cont, $slides, opts) {
  opts.before.push(function(curr, next, opts) {
    $.fn.cycle.commonReset(curr,next,opts,false,false);
    opts.cssBefore.left = next.cycleW/2;
    opts.cssBefore.top = next.cycleH/2;
    $.extend(opts.animIn, { top: 0, left: 0, width: next.cycleW, height: next.cycleH });
  });
  opts.cssBefore.width = 0;
  opts.cssBefore.height = 0;
  opts.animOut.opacity = 0;
};

// blindX
/*$.fn.cycle.transitions.blindX = function($cont, $slides, opts) {
  var w = $cont.css('overflow','hidden').width();
  opts.before.push(function(curr, next, opts) {
    $.fn.cycle.commonReset(curr,next,opts);
    opts.animIn.width = next.cycleW;
    opts.animOut.left   = curr.cycleW;
  });
  opts.cssBefore.left = w;
  opts.cssBefore.top = 0;
  opts.animIn.left = 0;
  opts.animOut.left = w;
};
// blindY
$.fn.cycle.transitions.blindY = function($cont, $slides, opts) {
  var h = $cont.css('overflow','hidden').height();
  opts.before.push(function(curr, next, opts) {
    $.fn.cycle.commonReset(curr,next,opts);
    opts.animIn.height = next.cycleH;
    opts.animOut.top   = curr.cycleH;
  });
  opts.cssBefore.top = h;
  opts.cssBefore.left = 0;
  opts.animIn.top = 0;
  opts.animOut.top = h;
};
// blindZ
$.fn.cycle.transitions.blindZ = function($cont, $slides, opts) {
  var h = $cont.css('overflow','hidden').height();
  var w = $cont.width();
  opts.before.push(function(curr, next, opts) {
    $.fn.cycle.commonReset(curr,next,opts);
    opts.animIn.height = next.cycleH;
    opts.animOut.top   = curr.cycleH;
  });
  opts.cssBefore.top = h;
  opts.cssBefore.left = w;
  opts.animIn.top = 0;
  opts.animIn.left = 0;
  opts.animOut.top = h;
  opts.animOut.left = w;
};

// growX - grow horizontally from centered 0 width
$.fn.cycle.transitions.growX = function($cont, $slides, opts) {
  opts.before.push(function(curr, next, opts) {
    $.fn.cycle.commonReset(curr,next,opts,false,true);
    opts.cssBefore.left = this.cycleW/2;
    opts.animIn.left = 0;
    opts.animIn.width = this.cycleW;
    opts.animOut.left = 0;
  });
  opts.cssBefore.top = 0;
  opts.cssBefore.width = 0;
};
// growY - grow vertically from centered 0 height
$.fn.cycle.transitions.growY = function($cont, $slides, opts) {
  opts.before.push(function(curr, next, opts) {
    $.fn.cycle.commonReset(curr,next,opts,true,false);
    opts.cssBefore.top = this.cycleH/2;
    opts.animIn.top = 0;
    opts.animIn.height = this.cycleH;
    opts.animOut.top = 0;
  });
  opts.cssBefore.height = 0;
  opts.cssBefore.left = 0;
};

// curtainX - squeeze in both edges horizontally
$.fn.cycle.transitions.curtainX = function($cont, $slides, opts) {
  opts.before.push(function(curr, next, opts) {
    $.fn.cycle.commonReset(curr,next,opts,false,true,true);
    opts.cssBefore.left = next.cycleW/2;
    opts.animIn.left = 0;
    opts.animIn.width = this.cycleW;
    opts.animOut.left = curr.cycleW/2;
    opts.animOut.width = 0;
  });
  opts.cssBefore.top = 0;
  opts.cssBefore.width = 0;
};
// curtainY - squeeze in both edges vertically
$.fn.cycle.transitions.curtainY = function($cont, $slides, opts) {
  opts.before.push(function(curr, next, opts) {
    $.fn.cycle.commonReset(curr,next,opts,true,false,true);
    opts.cssBefore.top = next.cycleH/2;
    opts.animIn.top = 0;
    opts.animIn.height = next.cycleH;
    opts.animOut.top = curr.cycleH/2;
    opts.animOut.height = 0;
  });
  opts.cssBefore.height = 0;
  opts.cssBefore.left = 0;
};

// cover - curr slide covered by next slide
$.fn.cycle.transitions.cover = function($cont, $slides, opts) {
  var d = opts.direction || 'left';
  var w = $cont.css('overflow','hidden').width();
  var h = $cont.height();
  opts.before.push(function(curr, next, opts) {
    $.fn.cycle.commonReset(curr,next,opts);
    opts.cssAfter.display = '';
    if (d == 'right')
      opts.cssBefore.left = -w;
    else if (d == 'up')
      opts.cssBefore.top = h;
    else if (d == 'down')
      opts.cssBefore.top = -h;
    else
      opts.cssBefore.left = w;
  });
  opts.animIn.left = 0;
  opts.animIn.top = 0;
  opts.cssBefore.top = 0;
  opts.cssBefore.left = 0;
};

// uncover - curr slide moves off next slide
$.fn.cycle.transitions.uncover = function($cont, $slides, opts) {
  var d = opts.direction || 'left';
  var w = $cont.css('overflow','hidden').width();
  var h = $cont.height();
  opts.before.push(function(curr, next, opts) {
    $.fn.cycle.commonReset(curr,next,opts,true,true,true);
    if (d == 'right')
      opts.animOut.left = w;
    else if (d == 'up')
      opts.animOut.top = -h;
    else if (d == 'down')
      opts.animOut.top = h;
    else
      opts.animOut.left = -w;
  });
  opts.animIn.left = 0;
  opts.animIn.top = 0;
  opts.cssBefore.top = 0;
  opts.cssBefore.left = 0;
};

// toss - move top slide and fade away
$.fn.cycle.transitions.toss = function($cont, $slides, opts) {
  var w = $cont.css('overflow','visible').width();
  var h = $cont.height();
  opts.before.push(function(curr, next, opts) {
    $.fn.cycle.commonReset(curr,next,opts,true,true,true);
    // provide default toss settings if animOut not provided
    if (!opts.animOut.left && !opts.animOut.top)
      $.extend(opts.animOut, { left: w*2, top: -h/2, opacity: 0 });
    else
      opts.animOut.opacity = 0;
  });
  opts.cssBefore.left = 0;
  opts.cssBefore.top = 0;
  opts.animIn.left = 0;
};*/

// wipe - clip animation
$.fn.cycle.transitions.wipe = function($cont, $slides, opts) {
  var w = $cont.css('overflow','hidden').width();
  var h = $cont.height();
  opts.cssBefore = opts.cssBefore || {};
  var clip;
  if (opts.clip) {
    if (/l2r/.test(opts.clip))
      clip = 'rect(0px 0px '+h+'px 0px)';
    else if (/r2l/.test(opts.clip))
      clip = 'rect(0px '+w+'px '+h+'px '+w+'px)';
    else if (/t2b/.test(opts.clip))
      clip = 'rect(0px '+w+'px 0px 0px)';
    else if (/b2t/.test(opts.clip))
      clip = 'rect('+h+'px '+w+'px '+h+'px 0px)';
    else if (/zoom/.test(opts.clip)) {
      var top = parseInt(h/2,10);
      var left = parseInt(w/2,10);
      clip = 'rect('+top+'px '+left+'px '+top+'px '+left+'px)';
    }
  }

  opts.cssBefore.clip = opts.cssBefore.clip || clip || 'rect(0px 0px 0px 0px)';

  var d = opts.cssBefore.clip.match(/(\d+)/g);
  var t = parseInt(d[0],10), r = parseInt(d[1],10), b = parseInt(d[2],10), l = parseInt(d[3],10);

  opts.before.push(function(curr, next, opts) {
    if (curr == next) return;
    var $curr = $(curr), $next = $(next);
    $.fn.cycle.commonReset(curr,next,opts,true,true,false);
    opts.cssAfter.display = 'block';

    var step = 1, count = parseInt((opts.speedIn / 13),10) - 1;
    (function f() {
      var tt = t ? t - parseInt(step * (t/count),10) : 0;
      var ll = l ? l - parseInt(step * (l/count),10) : 0;
      var bb = b < h ? b + parseInt(step * ((h-b)/count || 1),10) : h;
      var rr = r < w ? r + parseInt(step * ((w-r)/count || 1),10) : w;
      $next.css({ clip: 'rect('+tt+'px '+rr+'px '+bb+'px '+ll+'px)' });
      (step++ <= count) ? setTimeout(f, 13) : $curr.css('display', 'none');
    })();
  });
  $.extend(opts.cssBefore, { display: 'block', opacity: 1, top: 0, left: 0 });
  opts.animIn    = { left: 0 };
  opts.animOut   = { left: 0 };
};

})(jQuery);

$(document).ready(function(){
  $(".btn_bar1-1").hover(function(){
    $(".shop_bg").stop().animate({left:"-910px"});
  
  });
  
  $(".btn_bar1-3").hover(function(){
    $(".shop_bg").stop().animate({left:"-910px"});
  
  });
  
  
  $(".btn_bar1-2").hover(function(){
  
    $(".shop_bg").stop().animate({left:"-60px"});

  });
  $(".btn_bar1").hover(function(){
  
    $(".shop_bg").stop().animate({left:"-60px"});

  });





  $(".btn_bar1").mouseover(function(){
    $(".btn_bar1-2").attr('src','UserFiles/map/shopimg/1-1.png');
  });
  $(".btn_bar1").mouseout(function(){
    $(".btn_bar1-2").attr('src','UserFiles/map/shopimg/1-2.png');
  });
   $(".btn_bar1-1").mouseover(function(){
    $(".btn_bar1-3").attr('src','UserFiles/map/shopimg/2-1.png');
  });
  $(".btn_bar1-1").mouseout(function(){
    $(".btn_bar1-3").attr('src','UserFiles/map/shopimg/2-2.png');
  });


  $(".btn_bar1-3").mouseover(function(){
    $(".btn_bar1-3").attr('src','UserFiles/map/shopimg/2-1.png');
  });

  $(".btn_bar1-3").mouseout(function(){
    $(".btn_bar1-3").attr('src','UserFiles/map/shopimg/2-2.png');
  });



 
  $(".btn_bar1").mouseover(function(){
    $(".btn_bar1-2").attr('src','UserFiles/map/shopimg/1-1.png');
  });
  $(".btn_bar1").mouseout(function(){
    $(".btn_bar1-2").attr('src','UserFiles/map/shopimg/1-2.png');
  });




});