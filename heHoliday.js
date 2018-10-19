//     heholiday.js 1.0.0
//     http://he-Date.info/site.html
//     (c) 2014 (ה'תשע"ה) - Daniel Erez (erezdaniel7@gmail.com)
//     Heholiday may be freely distributed under the MIT license.

function getJwishHoliday(heDate){
    switch (heDate.getMonth()){
        case 1://תשרי
            if (heDate.getDate()==1 || heDate.getDate()==2) return "ראש השנה";
            else if (heDate.getDate() == 3 && heDate.getDay() != 7) return "צום גדליה";
            else if (heDate.getDate() == 4 && heDate.getDay() == 1) return "צום גדליה (נדחה)";
            else if (heDate.getDate()==9) return "ערב יום כיפור";
            else if (heDate.getDate()==10) return "יום כיפור";
            else if (heDate.getDate()==14) return "ערב סוכות";
            else if (heDate.getDate()==15) return "סוכות";
            else if (heDate.getDate()==16) return "א' חוה\"מ";
            else if (heDate.getDate()==17) return "ב' חוה\"מ";
            else if (heDate.getDate()==18) return "ג' חוה\"מ";
            else if (heDate.getDate()==19) return "ד' חוה\"מ";
            else if (heDate.getDate()==20) return "ה' חוה\"מ";
            else if (heDate.getDate()==21) return "הושענא רבה";
            else if (heDate.getDate()==22) return "שמיני עצרת ושמחת תורה";
            break;
        case 2: //חשון
            if (heDate.getYear()>5757 && ((heDate.getDate()==12 && heDate.getDay()!=6) || (heDate.getDate()==11 && heDate.getDay()==5))) return "יום הזיכרון ליצחק רבין";
            break;
        case 3: //כסלו
            if (heDate.getDate()==24) return "ערב חנוכה";
            else if (heDate.getDate()==25) return "א' חנוכה";
            else if (heDate.getDate()==26) return "ב' חנוכה";
            else if (heDate.getDate()==27) return "ג' חנוכה";
            else if (heDate.getDate()==28) return "ד' חנוכה";
            else if (heDate.getDate()==29) return "ה' חנוכה";
            else if (heDate.getDate()==30) return "ו' חנוכה";
            break;
        case 4: //טבת
            if (heDate.getDate()<=3){
                var i=0
                if (HeDate.getyeartype(heDate.getYear())==-1) i=1;
                if (heDate.getDate()==(0+i)) return "ו' חנוכה";
                else if (heDate.getDate()==(1+i)) return "ז' חנוכה";
                else if (heDate.getDate()==(2+i)) return "זאת חנוכה";
            }
            else if (heDate.getDate()==10) return "צום עשרה בטבת";
            break;
        case 5: //שבט
            if (heDate.getDate()==15) return "ראש השנה לאילנות";
            break;
        case 6: //אדר א
            if (heDate.getDate()==14) return "פורים קטן";
            else if (heDate.getDate()==15) return "שושן פורים קטן";
            break;
        case 7: //אדר
            if ((heDate.getDate()==11 && heDate.getDay()==5) ||(heDate.getDate()==13 && heDate.getDay()!=7)) return "תענית אסתר";
            else if (heDate.getDate()==14) return "פורים";
            else if (heDate.getDate()==15) return "שושן פורים";
            break;
        case 8: //ניסן
            if (heDate.getDate()==14) return "ערב פסח";
            else if (heDate.getDate()==15) return "פסח";
            else if (heDate.getDate()==16) return "א' חוה\"מ";
            else if (heDate.getDate()==17) return "ב' חוה\"מ";
            else if (heDate.getDate()==18) return "ג' חוה\"מ";
            else if (heDate.getDate()==19) return "ד' חוה\"מ";
            else if (heDate.getDate()==20) return "ה' חוה\"מ";
            else if (heDate.getDate()==21) return "שביעי של פסח";
            if (heDate.getYear()>=5711){
                if (heDate.getDate()==26 && heDate.getDay()==5) return "יום הזיכרון לשואה ולגבורה (מוקדם)";
                else if (heDate.getDate()==28 && heDate.getDay()==2 && heDate.getYear()>=5757) return "יום הזיכרון לשואה ולגבורה (נדחה)";
                else if (heDate.getDate()==27 && heDate.getDay()!=6 && (heDate.getDay()!=1 | heDate.getYear()<5757)) return "יום הזיכרון לשואה ולגבורה";
            }
            break;                                    
        case 9://אייר
			if (heDate.getYear()==5708 && heDate.getDate()<=6){ //שנת תש"ח
				if (heDate.getDate()==5) return "יום העצמאות";
				if (heDate.getDate()==4) return "יום הזיכרון לחללי מערכות ישראל";
			}
            if (heDate.getYear()>=5709 && heDate.getDate()<=6){
                if (heDate.getDate()==5 &&heDate.getDay()==4) return "יום העצמאות";
                if (heDate.getYear()<5714)
                    {if (heDate.getDate()==6 &&heDate.getDay()==1) return "יום העצמאות (נדחה)";}
                else
                    {if (heDate.getDate()==3 &&heDate.getDay()==5) return "יום העצמאות (הוקדם)";} 
                if (heDate.getDate()==4 &&heDate.getDay()==5) return "יום העצמאות (הוקדם)";
                if (heDate.getYear()<5764)
                    {if (heDate.getDate()==5 &&heDate.getDay()==2) return "יום העצמאות";}
                else
                    {if (heDate.getDate()==6 &&heDate.getDay()==3) return "יום העצמאות (נדחה)";} 
                if (heDate.getDate()==4 &&heDate.getDay()==3) return "יום הזיכרון לחללי מערכות ישראל";
                if (heDate.getYear()<5714)
                    {if (heDate.getDate()==4 &&heDate.getDay()==5) return "יום הזיכרון לחללי מערכות ישראל (הוקדם)";}
                else
                    {if (heDate.getDate()==2 &&heDate.getDay()==4) return "יום הזיכרון לחללי מערכות ישראל (הוקדם)";} 
                if (heDate.getDate()==3 &&heDate.getDay()==4) return "יום הזיכרון לחללי מערכות ישראל (הוקדם)"
                if (heDate.getYear()<5764)
                    {if (heDate.getDate()==4 &&heDate.getDay()==1) return "יום הזיכרון לחללי מערכות ישראל";}
                else
                    {if (heDate.getDate()==5 &&heDate.getDay()==2) return "יום הזיכרון לחללי מערכות ישראל (נדחה)";} 
            }
            else if (heDate.getDate()==14) return "פסח שני";
            else if (heDate.getDate()==18) return "ל\"ג בעומר";
            else if (heDate.getDate()==28) return "יום ירושלים";
            break;
        case 10://סיון
            if (heDate.getDate()==5) return "ערב שבועות";
            else if (heDate.getDate()==6) return "שבועות";
            break;
        case 11://תמוז
            if (heDate.getDate() == 17 && heDate.getDay() != 7) return "צום י\"ז בתמוז";
            else if (heDate.getDate() == 18 && heDate.getDay() == 1) return "צום י\"ז בתמוז (נדחה)";
            break;
        case 12://אב
            if (heDate.getDate() == 9 && heDate.getDay() != 7) return "צום ט\' באב";
            if (heDate.getDate() == 10 && heDate.getDay() == 1) return "צום ט\' באב (נדחה)";
            else if (heDate.getDate()==15) return "ט\"ו באב";
            break;
        case 13://אלול
            if (heDate.getDate()==29) return "ערב ראש השנה";
            break;
    }
	return null;
}