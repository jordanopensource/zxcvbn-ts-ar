this.zxcvbnts = this.zxcvbnts || {};
this.zxcvbnts["language-ar"] = (function (exports) {
    'use strict';

    var commonWords = "".split(',');

    var firstnames = "aban,abbas,abbud,aboud,abdul-alim,abdul-aliyy,abdul-azim,abdul-aziz,abdul-bari,abdul-basit,abdul-fattah,abdul-ghaffar,abdul-hadi,abdul-hafiz,abdul-hakam,abdul-hakim,abdul-halim,abdul-hamid,abdul-haqq,abdul-hasib,abdul-jabbar,abdul-jalil,abdul-karim,abdul-khaliq,abdullah,abdul-latif,abdul-majid,abdul-malik,abdul-mu'izz,abdul-mujib,abdul-muta'al,abdul-muttalib,abdul-nasir,abdul-nasser,abdul-qadir,abdul-qahhar,abdul-quddus,abdul-rafi,abdul-rahim,abdul-rahman,abdul-rashid,abdul-ra'uf,abdul-razzaq,abdul-sabur,abdul-salam,abdul-samad,abdul-sami,abdul-shakur,abdul-tawwab,abdul-wadud,abdul-wahhab,abdul-wahid,abraha,adel,adham,adnan,afif,ahmad,ahmed,akil,akram,ala'a,alaa,aladdin,ali,alim,altair,ameer,amir,amid,amin,amjad,ammar,amr,anbar,anis,anwar,arfan,arif,asad,asadel,ashraf,asim,aswad,ata,atif,awad,ayman,ayyad,ayyub,aza,azeem,azhar,azzam,badr,baha,bahir,barakah,bashshar,basil,bassam,bilal,bishr,boulos,burhan,bursuq,butrus,dabir,da'ud,dharr,dhul,diya,duqaq,emir,esam,fadi,fadil,fahd,faisal,fakhir,fakhiri,fakih,farid,fariq,faris,farraj,faruq,fath,fatin,fawwaz,fawzi,ferran,fida,firas,fouad,fudail,gamal,ghalib,ghassan,ghazi,ghiyath,habib,hadad,haddad,hadi,hajjaj,hakeem,hakem,halim,hamal,hamdan,hamid,hamzah,hana,hanbal,hani,hanif,harith,haroun,hasan,hashim,hassan,hatim,haytham,hilal,hilel,hisham,hud,hudhayfah,humam,husain,husam,husayn,ibrahim,idris,ihsan,imad,isa,isam,ishaq,isma'il,isra,izz,jabbar,jabir,jafar,jalal,jalil,jamal,jameel,jawad,jawhar,jibril,jihad,jubair,jumah,kadar,kadeen,kadeer,kahil,kaliq,kamal,kameel,kardal,kareef,kareem,kaseeb,kaseem,kateb,khaldun,khalid,khalil,khatib,khayr,khayri,khoury,khuzaymah,kutaiba,labib,labid,lahab,latif,luqman,lutfi,mahdi,mahir,mahmud,maimun,majid,makin,malik,ma'mun,ma'n,mansur,mansour,marid,marzuq,mash'al,masruq,mas'ud,maudad,mazin,mika,misbah,mohammed,mohamed,mohamad,mohammad,mohsen,mu'adh,mu'awiyah,mu'ayyad,mubarak,mufid,muhammad,muhsin,muhtadi,mujahid,mukhtar,mundhir,munir,muntasir,murtadi,musa,mus'ad,muslim,mustafa,muta,mu'tasim,mu'tazz,muti,muwaffaq,nabhan,nabil,nadhir,nadim,nadir,na'il,naim,naji,najib,najjar,najm,nasih,nasim,nasir,nasser,nawaf,nazih,nazim,nuh,numair,nu'man,nur,nuri,omar,othman,qadir,qaraja,qasim,qais,qays,qudamah,qutaiba,qutuz,rabah,rabi,radi,rafi,rafiq,raghib,rahman,ra'id,raed,rais,rakin,rashad,rashid,ratib,rayhan,reda,ridwan,riyad,sabih,sabir,sa'd,sadaqat,sa'eed,safwan,salah,saleh,salim,salman,sameh,sami,samir,samman,saqr,sariyah,sayyar,sayyid,seif,shadi,shafiq,shakir,sharif,shihab,siraj,sofian,subhi,suhail,suhayb,sulaiman,su'ud,tahir,talal,talib,tamir,tammam,tamman,tarif,tariq,tawfiq,taymullah,taysir,tayyib,thabit,ubadah,ubaid,ubayy,umar,umarah,umayr,usama,utbah,uthman,wadi,wafid,wafiq,wahib,wahid,wa'il,wael,wajih,wakil,waleed,walliyullah,wasim,wazir,yahyah,yaman,ya'qub,yasar,yasin,yasir,yazid,yunus,yusef,yushua,yusuf,zafar,zafir,zahid,zahir,zaid,zaim,zaki,zakiyy,ziyad,zubair,zuhair".split(',');

    var lastnames = "abadi,abboud,almasi,amari,antar,antoun,arian,asfour,asghar,asker,aswad,atiyeh,attia,awad,baba,bahar,basara,baz,bishara,bitar,botros,boulos,boutros,cham,dagher,daher,deeb,essa,fakhoury,ganem,ganim,gerges,ghannam,guirguis,hadad,haddad,haik,hajjar,hakimi,halabi,hanania,handal,harb,isa,issa,kalb,kanaan,kassab,kassis,kattan,khouri,khoury,kouri,koury,maalouf,maloof,malouf,maroun,masih,mifsud,mikhail,moghadam,morcos,nader,nahas,naifeh,najjar,naser,nassar,nazari,pagination,quraishi,qureshi,rahal,sabbag,sabbagh,safar,said,salib,saliba,samaha,sarraf,sayegh,seif,shadid,shalhoub,shammas,shamon,shamoon,shamoun,sleiman,tahan,tannous,toma,totah,touma,tuma,wasem,zogby".split(',');

    var wikipedia = "".split(',');

    var translations = {
      warnings: {
        straightRow: 'من السهل تخمين الصفوف المستقيمة من المفاتيح على لوحة المفاتيح.',
        keyPattern: 'من السهل تخمين أنماط لوحة المفاتيح القصيرة.',
        simpleRepeat: 'من السهل تخمين الأحرف المتكررة مثل "aaa".',
        extendedRepeat: 'من السهل تخمين أنماط الأحرف المتكررة مثل "abcabcabc".',
        sequences: 'من السهل تخمين تسلسلات الأحرف الشائعة مثل "abc".',
        recentYears: 'من السهل تخمين السنوات الأخيرة.',
        dates: 'من السهل تخمين التواريخ.',
        topTen: 'هذه كلمة مرور مستخدمة بكثرة.',
        topHundred: 'هذه كلمة مرور مستخدمة بشكل متكرر.',
        common: 'هذه كلمة مرور شائعة الاستخدام.',
        similarToCommon: 'هذه كلمة مرور مشابهة لكلمة مرور شائعة الاستخدام.',
        wordByItself: 'من السهل تخمين الكلمات المنفردة.',
        namesByThemselves: 'من السهل تخمين الأسماء المنفردة أو الألقاب.',
        commonNames: 'من السهل تخمين الأسماء والألقاب الشائعة.',
        userInputs: 'يجب ألا يكون هناك أي بيانات شخصية أو متعلقة بالصفحة.',
        pwned: 'تم الكشف عن كلمة المرور الخاصة بك عن طريق تسريب بيانات على الإنترنت.'
      },
      suggestions: {
        l33t: "تجنب الاستبدالات المتوقعة للأحرف مثل '@' بدل 'a'.",
        reverseWords: 'تجنب التهجئة المعكوسة للكلمات الشائعة.',
        allUppercase: 'قم بتكبير بعض الحروف ولكن ليس جميعها.',
        capitalization: 'قم بتكبير حروف أخرى وليس الحرف الأول فقط',
        dates: 'تجنب التواريخ والسنوات المرتبطة بك.',
        recentYears: 'تجنب السنوات الأخيرة.',
        associatedYears: 'تجنب السنوات المرتبطة بك.',
        sequences: 'تجنب تسلسل الأحرف الشائعة.',
        repeated: 'تجنب الكلمات والأحرف المتكررة.',
        longerKeyboardPattern: 'استخدم أنماط لوحة المفاتيح أطول وقم بتغيير اتجاه الكتابة عدة مرات.',
        anotherWord: 'أضف المزيد من الكلمات الأقل شيوعًا.',
        useWords: 'استخدم كلمات متعددة، ولكن تجنب العبارات الشائعة.',
        noNeed: 'يمكنك إنشاء كلمات مرور قوية دون استخدام الرموز أو الأرقام أو الأحرف الكبيرة.',
        pwned: 'إذا كنت تستخدم كلمة المرور هذه في مكان آخر، فيجب عليك تغييرها.'
      },
      timeEstimation: {
        ltSecond: 'أقل من ثانية',
        second: '{base} ثانية',
        seconds: '{base} ثوانٍ',
        minute: '{base} دقيقة',
        minutes: '{base} دقائق',
        hour: '{base} ساعة',
        hours: '{base} ساعات',
        day: '{base} يوم',
        days: '{base} أيام',
        month: '{base} شهر',
        months: '{base} شهور',
        year: '{base} سنة',
        years: '{base} سنين',
        centuries: 'قرون'
      }
    };

    // This file is auto generated by data-scripts/_helpers/runtime.ts
    const dictionary = {
      commonWords,
      firstnames,
      lastnames,
      wikipedia
    };

    exports.dictionary = dictionary;
    exports.translations = translations;

    return exports;

})({});
//# sourceMappingURL=zxcvbn-ts.js.map
