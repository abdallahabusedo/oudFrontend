(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{135:function(e,t,a){},138:function(e,t,a){"use strict";a.r(t);var r=a(11),s=a(12),n=a(14),i=a(13),o=a(15),c=a(0),l=a.n(c),p=a(72),m=a(45),u=a.n(m),d=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(n.a)(this,Object(i.a)(t).call(this,e))).state={Facebook_token:"",Google_token:""},a}return Object(o.a)(t,e),Object(s.a)(t,[{key:"handelClickFace",value:function(){var e=this;u.a.post("".concat("http://localhost:3000","/users"),this.state.Facebook_token).then((function(t){e.setState({Facebook_token:t.data.accessToken})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h6",{className:"hint-text"},"Sign In with your social media account"),l.a.createElement("div",{className:"social-icons"},l.a.createElement(p.default,{onClick:this.handelClickFace})),l.a.createElement("section",{className:"or-seperator"},l.a.createElement("i",null,"OR"),l.a.createElement("h6",{className:"hint-text"},"Sign In with your email address")))}}]),t}(c.Component);t.default=d},139:function(e,t,a){"use strict";a.r(t);var r=a(11),s=a(12),n=a(14),i=a(13),o=a(15),c=a(0),l=a.n(c),p=a(50),m=function(e){function t(){return Object(r.a)(this,t),Object(n.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("section",{className:"main-brand"},l.a.createElement(p.a,{className:"navbar-brand",to:"/"},l.a.createElement("span",null,l.a.createElement("img",{id:"OudImage",src:"https://cdn.discordapp.com/attachments/691413676934299668/691744414204166164/Oud.png",className:"d-inline-block align-top",alt:"logo imag"}),l.a.createElement("p",{className:"Oud"},"Oud"))))}}]),t}(c.Component);t.default=m},140:function(e,t,a){"use strict";a.r(t);var r=a(11),s=a(12),n=a(14),i=a(13),o=a(15),c=a(0),l=a.n(c),p=a(72),m=function(e){function t(){return Object(r.a)(this,t),Object(n.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h6",{className:"hint-text"},"Sign Up with your social media account"),l.a.createElement("section",{className:"social-icons"},l.a.createElement("button",{className:"google_button",href:"#"},l.a.createElement("img",{alt:"",src:"http://pngimg.com/uploads/google/google_PNG19630.png",className:"googlepic"})," ","continue with Google"),l.a.createElement(p.default,null)),l.a.createElement("section",{className:"or-seperator"},l.a.createElement("i",null,"OR"),l.a.createElement("h6",{className:"hint-text"},"Sign up with your email address")))}}]),t}(c.Component);t.default=m},222:function(e,t,a){e.exports=a(834)},372:function(e,t,a){var r={"./Binary_Property/ASCII.js":373,"./Binary_Property/ASCII_Hex_Digit.js":374,"./Binary_Property/Alphabetic.js":375,"./Binary_Property/Any.js":376,"./Binary_Property/Assigned.js":377,"./Binary_Property/Bidi_Control.js":378,"./Binary_Property/Bidi_Mirrored.js":379,"./Binary_Property/Case_Ignorable.js":380,"./Binary_Property/Cased.js":381,"./Binary_Property/Changes_When_Casefolded.js":382,"./Binary_Property/Changes_When_Casemapped.js":383,"./Binary_Property/Changes_When_Lowercased.js":384,"./Binary_Property/Changes_When_NFKC_Casefolded.js":385,"./Binary_Property/Changes_When_Titlecased.js":386,"./Binary_Property/Changes_When_Uppercased.js":387,"./Binary_Property/Dash.js":388,"./Binary_Property/Default_Ignorable_Code_Point.js":389,"./Binary_Property/Deprecated.js":390,"./Binary_Property/Diacritic.js":391,"./Binary_Property/Emoji.js":392,"./Binary_Property/Emoji_Component.js":393,"./Binary_Property/Emoji_Modifier.js":394,"./Binary_Property/Emoji_Modifier_Base.js":395,"./Binary_Property/Emoji_Presentation.js":396,"./Binary_Property/Extended_Pictographic.js":397,"./Binary_Property/Extender.js":398,"./Binary_Property/Grapheme_Base.js":399,"./Binary_Property/Grapheme_Extend.js":400,"./Binary_Property/Hex_Digit.js":401,"./Binary_Property/IDS_Binary_Operator.js":402,"./Binary_Property/IDS_Trinary_Operator.js":403,"./Binary_Property/ID_Continue.js":404,"./Binary_Property/ID_Start.js":405,"./Binary_Property/Ideographic.js":406,"./Binary_Property/Join_Control.js":407,"./Binary_Property/Logical_Order_Exception.js":408,"./Binary_Property/Lowercase.js":409,"./Binary_Property/Math.js":410,"./Binary_Property/Noncharacter_Code_Point.js":411,"./Binary_Property/Pattern_Syntax.js":412,"./Binary_Property/Pattern_White_Space.js":413,"./Binary_Property/Quotation_Mark.js":414,"./Binary_Property/Radical.js":415,"./Binary_Property/Regional_Indicator.js":416,"./Binary_Property/Sentence_Terminal.js":417,"./Binary_Property/Soft_Dotted.js":418,"./Binary_Property/Terminal_Punctuation.js":419,"./Binary_Property/Unified_Ideograph.js":420,"./Binary_Property/Uppercase.js":421,"./Binary_Property/Variation_Selector.js":422,"./Binary_Property/White_Space.js":423,"./Binary_Property/XID_Continue.js":424,"./Binary_Property/XID_Start.js":425,"./General_Category/Cased_Letter.js":426,"./General_Category/Close_Punctuation.js":427,"./General_Category/Connector_Punctuation.js":428,"./General_Category/Control.js":429,"./General_Category/Currency_Symbol.js":430,"./General_Category/Dash_Punctuation.js":431,"./General_Category/Decimal_Number.js":432,"./General_Category/Enclosing_Mark.js":433,"./General_Category/Final_Punctuation.js":434,"./General_Category/Format.js":435,"./General_Category/Initial_Punctuation.js":436,"./General_Category/Letter.js":437,"./General_Category/Letter_Number.js":438,"./General_Category/Line_Separator.js":439,"./General_Category/Lowercase_Letter.js":440,"./General_Category/Mark.js":441,"./General_Category/Math_Symbol.js":442,"./General_Category/Modifier_Letter.js":443,"./General_Category/Modifier_Symbol.js":444,"./General_Category/Nonspacing_Mark.js":445,"./General_Category/Number.js":446,"./General_Category/Open_Punctuation.js":447,"./General_Category/Other.js":448,"./General_Category/Other_Letter.js":449,"./General_Category/Other_Number.js":450,"./General_Category/Other_Punctuation.js":451,"./General_Category/Other_Symbol.js":452,"./General_Category/Paragraph_Separator.js":453,"./General_Category/Private_Use.js":454,"./General_Category/Punctuation.js":455,"./General_Category/Separator.js":456,"./General_Category/Space_Separator.js":457,"./General_Category/Spacing_Mark.js":458,"./General_Category/Surrogate.js":459,"./General_Category/Symbol.js":460,"./General_Category/Titlecase_Letter.js":461,"./General_Category/Unassigned.js":462,"./General_Category/Uppercase_Letter.js":463,"./Script/Adlam.js":464,"./Script/Ahom.js":465,"./Script/Anatolian_Hieroglyphs.js":466,"./Script/Arabic.js":467,"./Script/Armenian.js":468,"./Script/Avestan.js":469,"./Script/Balinese.js":470,"./Script/Bamum.js":471,"./Script/Bassa_Vah.js":472,"./Script/Batak.js":473,"./Script/Bengali.js":474,"./Script/Bhaiksuki.js":475,"./Script/Bopomofo.js":476,"./Script/Brahmi.js":477,"./Script/Braille.js":478,"./Script/Buginese.js":479,"./Script/Buhid.js":480,"./Script/Canadian_Aboriginal.js":481,"./Script/Carian.js":482,"./Script/Caucasian_Albanian.js":483,"./Script/Chakma.js":484,"./Script/Cham.js":485,"./Script/Cherokee.js":486,"./Script/Chorasmian.js":487,"./Script/Common.js":488,"./Script/Coptic.js":489,"./Script/Cuneiform.js":490,"./Script/Cypriot.js":491,"./Script/Cyrillic.js":492,"./Script/Deseret.js":493,"./Script/Devanagari.js":494,"./Script/Dives_Akuru.js":495,"./Script/Dogra.js":496,"./Script/Duployan.js":497,"./Script/Egyptian_Hieroglyphs.js":498,"./Script/Elbasan.js":499,"./Script/Elymaic.js":500,"./Script/Ethiopic.js":501,"./Script/Georgian.js":502,"./Script/Glagolitic.js":503,"./Script/Gothic.js":504,"./Script/Grantha.js":505,"./Script/Greek.js":506,"./Script/Gujarati.js":507,"./Script/Gunjala_Gondi.js":508,"./Script/Gurmukhi.js":509,"./Script/Han.js":510,"./Script/Hangul.js":511,"./Script/Hanifi_Rohingya.js":512,"./Script/Hanunoo.js":513,"./Script/Hatran.js":514,"./Script/Hebrew.js":515,"./Script/Hiragana.js":516,"./Script/Imperial_Aramaic.js":517,"./Script/Inherited.js":518,"./Script/Inscriptional_Pahlavi.js":519,"./Script/Inscriptional_Parthian.js":520,"./Script/Javanese.js":521,"./Script/Kaithi.js":522,"./Script/Kannada.js":523,"./Script/Katakana.js":524,"./Script/Kayah_Li.js":525,"./Script/Kharoshthi.js":526,"./Script/Khitan_Small_Script.js":527,"./Script/Khmer.js":528,"./Script/Khojki.js":529,"./Script/Khudawadi.js":530,"./Script/Lao.js":531,"./Script/Latin.js":532,"./Script/Lepcha.js":533,"./Script/Limbu.js":534,"./Script/Linear_A.js":535,"./Script/Linear_B.js":536,"./Script/Lisu.js":537,"./Script/Lycian.js":538,"./Script/Lydian.js":539,"./Script/Mahajani.js":540,"./Script/Makasar.js":541,"./Script/Malayalam.js":542,"./Script/Mandaic.js":543,"./Script/Manichaean.js":544,"./Script/Marchen.js":545,"./Script/Masaram_Gondi.js":546,"./Script/Medefaidrin.js":547,"./Script/Meetei_Mayek.js":548,"./Script/Mende_Kikakui.js":549,"./Script/Meroitic_Cursive.js":550,"./Script/Meroitic_Hieroglyphs.js":551,"./Script/Miao.js":552,"./Script/Modi.js":553,"./Script/Mongolian.js":554,"./Script/Mro.js":555,"./Script/Multani.js":556,"./Script/Myanmar.js":557,"./Script/Nabataean.js":558,"./Script/Nandinagari.js":559,"./Script/New_Tai_Lue.js":560,"./Script/Newa.js":561,"./Script/Nko.js":562,"./Script/Nushu.js":563,"./Script/Nyiakeng_Puachue_Hmong.js":564,"./Script/Ogham.js":565,"./Script/Ol_Chiki.js":566,"./Script/Old_Hungarian.js":567,"./Script/Old_Italic.js":568,"./Script/Old_North_Arabian.js":569,"./Script/Old_Permic.js":570,"./Script/Old_Persian.js":571,"./Script/Old_Sogdian.js":572,"./Script/Old_South_Arabian.js":573,"./Script/Old_Turkic.js":574,"./Script/Oriya.js":575,"./Script/Osage.js":576,"./Script/Osmanya.js":577,"./Script/Pahawh_Hmong.js":578,"./Script/Palmyrene.js":579,"./Script/Pau_Cin_Hau.js":580,"./Script/Phags_Pa.js":581,"./Script/Phoenician.js":582,"./Script/Psalter_Pahlavi.js":583,"./Script/Rejang.js":584,"./Script/Runic.js":585,"./Script/Samaritan.js":586,"./Script/Saurashtra.js":587,"./Script/Sharada.js":588,"./Script/Shavian.js":589,"./Script/Siddham.js":590,"./Script/SignWriting.js":591,"./Script/Sinhala.js":592,"./Script/Sogdian.js":593,"./Script/Sora_Sompeng.js":594,"./Script/Soyombo.js":595,"./Script/Sundanese.js":596,"./Script/Syloti_Nagri.js":597,"./Script/Syriac.js":598,"./Script/Tagalog.js":599,"./Script/Tagbanwa.js":600,"./Script/Tai_Le.js":601,"./Script/Tai_Tham.js":602,"./Script/Tai_Viet.js":603,"./Script/Takri.js":604,"./Script/Tamil.js":605,"./Script/Tangut.js":606,"./Script/Telugu.js":607,"./Script/Thaana.js":608,"./Script/Thai.js":609,"./Script/Tibetan.js":610,"./Script/Tifinagh.js":611,"./Script/Tirhuta.js":612,"./Script/Ugaritic.js":613,"./Script/Vai.js":614,"./Script/Wancho.js":615,"./Script/Warang_Citi.js":616,"./Script/Yezidi.js":617,"./Script/Yi.js":618,"./Script/Zanabazar_Square.js":619,"./Script_Extensions/Adlam.js":620,"./Script_Extensions/Ahom.js":621,"./Script_Extensions/Anatolian_Hieroglyphs.js":622,"./Script_Extensions/Arabic.js":623,"./Script_Extensions/Armenian.js":624,"./Script_Extensions/Avestan.js":625,"./Script_Extensions/Balinese.js":626,"./Script_Extensions/Bamum.js":627,"./Script_Extensions/Bassa_Vah.js":628,"./Script_Extensions/Batak.js":629,"./Script_Extensions/Bengali.js":630,"./Script_Extensions/Bhaiksuki.js":631,"./Script_Extensions/Bopomofo.js":632,"./Script_Extensions/Brahmi.js":633,"./Script_Extensions/Braille.js":634,"./Script_Extensions/Buginese.js":635,"./Script_Extensions/Buhid.js":636,"./Script_Extensions/Canadian_Aboriginal.js":637,"./Script_Extensions/Carian.js":638,"./Script_Extensions/Caucasian_Albanian.js":639,"./Script_Extensions/Chakma.js":640,"./Script_Extensions/Cham.js":641,"./Script_Extensions/Cherokee.js":642,"./Script_Extensions/Chorasmian.js":643,"./Script_Extensions/Common.js":644,"./Script_Extensions/Coptic.js":645,"./Script_Extensions/Cuneiform.js":646,"./Script_Extensions/Cypriot.js":647,"./Script_Extensions/Cyrillic.js":648,"./Script_Extensions/Deseret.js":649,"./Script_Extensions/Devanagari.js":650,"./Script_Extensions/Dives_Akuru.js":651,"./Script_Extensions/Dogra.js":652,"./Script_Extensions/Duployan.js":653,"./Script_Extensions/Egyptian_Hieroglyphs.js":654,"./Script_Extensions/Elbasan.js":655,"./Script_Extensions/Elymaic.js":656,"./Script_Extensions/Ethiopic.js":657,"./Script_Extensions/Georgian.js":658,"./Script_Extensions/Glagolitic.js":659,"./Script_Extensions/Gothic.js":660,"./Script_Extensions/Grantha.js":661,"./Script_Extensions/Greek.js":662,"./Script_Extensions/Gujarati.js":663,"./Script_Extensions/Gunjala_Gondi.js":664,"./Script_Extensions/Gurmukhi.js":665,"./Script_Extensions/Han.js":666,"./Script_Extensions/Hangul.js":667,"./Script_Extensions/Hanifi_Rohingya.js":668,"./Script_Extensions/Hanunoo.js":669,"./Script_Extensions/Hatran.js":670,"./Script_Extensions/Hebrew.js":671,"./Script_Extensions/Hiragana.js":672,"./Script_Extensions/Imperial_Aramaic.js":673,"./Script_Extensions/Inherited.js":674,"./Script_Extensions/Inscriptional_Pahlavi.js":675,"./Script_Extensions/Inscriptional_Parthian.js":676,"./Script_Extensions/Javanese.js":677,"./Script_Extensions/Kaithi.js":678,"./Script_Extensions/Kannada.js":679,"./Script_Extensions/Katakana.js":680,"./Script_Extensions/Kayah_Li.js":681,"./Script_Extensions/Kharoshthi.js":682,"./Script_Extensions/Khitan_Small_Script.js":683,"./Script_Extensions/Khmer.js":684,"./Script_Extensions/Khojki.js":685,"./Script_Extensions/Khudawadi.js":686,"./Script_Extensions/Lao.js":687,"./Script_Extensions/Latin.js":688,"./Script_Extensions/Lepcha.js":689,"./Script_Extensions/Limbu.js":690,"./Script_Extensions/Linear_A.js":691,"./Script_Extensions/Linear_B.js":692,"./Script_Extensions/Lisu.js":693,"./Script_Extensions/Lycian.js":694,"./Script_Extensions/Lydian.js":695,"./Script_Extensions/Mahajani.js":696,"./Script_Extensions/Makasar.js":697,"./Script_Extensions/Malayalam.js":698,"./Script_Extensions/Mandaic.js":699,"./Script_Extensions/Manichaean.js":700,"./Script_Extensions/Marchen.js":701,"./Script_Extensions/Masaram_Gondi.js":702,"./Script_Extensions/Medefaidrin.js":703,"./Script_Extensions/Meetei_Mayek.js":704,"./Script_Extensions/Mende_Kikakui.js":705,"./Script_Extensions/Meroitic_Cursive.js":706,"./Script_Extensions/Meroitic_Hieroglyphs.js":707,"./Script_Extensions/Miao.js":708,"./Script_Extensions/Modi.js":709,"./Script_Extensions/Mongolian.js":710,"./Script_Extensions/Mro.js":711,"./Script_Extensions/Multani.js":712,"./Script_Extensions/Myanmar.js":713,"./Script_Extensions/Nabataean.js":714,"./Script_Extensions/Nandinagari.js":715,"./Script_Extensions/New_Tai_Lue.js":716,"./Script_Extensions/Newa.js":717,"./Script_Extensions/Nko.js":718,"./Script_Extensions/Nushu.js":719,"./Script_Extensions/Nyiakeng_Puachue_Hmong.js":720,"./Script_Extensions/Ogham.js":721,"./Script_Extensions/Ol_Chiki.js":722,"./Script_Extensions/Old_Hungarian.js":723,"./Script_Extensions/Old_Italic.js":724,"./Script_Extensions/Old_North_Arabian.js":725,"./Script_Extensions/Old_Permic.js":726,"./Script_Extensions/Old_Persian.js":727,"./Script_Extensions/Old_Sogdian.js":728,"./Script_Extensions/Old_South_Arabian.js":729,"./Script_Extensions/Old_Turkic.js":730,"./Script_Extensions/Oriya.js":731,"./Script_Extensions/Osage.js":732,"./Script_Extensions/Osmanya.js":733,"./Script_Extensions/Pahawh_Hmong.js":734,"./Script_Extensions/Palmyrene.js":735,"./Script_Extensions/Pau_Cin_Hau.js":736,"./Script_Extensions/Phags_Pa.js":737,"./Script_Extensions/Phoenician.js":738,"./Script_Extensions/Psalter_Pahlavi.js":739,"./Script_Extensions/Rejang.js":740,"./Script_Extensions/Runic.js":741,"./Script_Extensions/Samaritan.js":742,"./Script_Extensions/Saurashtra.js":743,"./Script_Extensions/Sharada.js":744,"./Script_Extensions/Shavian.js":745,"./Script_Extensions/Siddham.js":746,"./Script_Extensions/SignWriting.js":747,"./Script_Extensions/Sinhala.js":748,"./Script_Extensions/Sogdian.js":749,"./Script_Extensions/Sora_Sompeng.js":750,"./Script_Extensions/Soyombo.js":751,"./Script_Extensions/Sundanese.js":752,"./Script_Extensions/Syloti_Nagri.js":753,"./Script_Extensions/Syriac.js":754,"./Script_Extensions/Tagalog.js":755,"./Script_Extensions/Tagbanwa.js":756,"./Script_Extensions/Tai_Le.js":757,"./Script_Extensions/Tai_Tham.js":758,"./Script_Extensions/Tai_Viet.js":759,"./Script_Extensions/Takri.js":760,"./Script_Extensions/Tamil.js":761,"./Script_Extensions/Tangut.js":762,"./Script_Extensions/Telugu.js":763,"./Script_Extensions/Thaana.js":764,"./Script_Extensions/Thai.js":765,"./Script_Extensions/Tibetan.js":766,"./Script_Extensions/Tifinagh.js":767,"./Script_Extensions/Tirhuta.js":768,"./Script_Extensions/Ugaritic.js":769,"./Script_Extensions/Vai.js":770,"./Script_Extensions/Wancho.js":771,"./Script_Extensions/Warang_Citi.js":772,"./Script_Extensions/Yezidi.js":773,"./Script_Extensions/Yi.js":774,"./Script_Extensions/Zanabazar_Square.js":775,"./index.js":776,"./unicode-version.js":777};function s(e){var t=n(e);return a(t)}function n(e){if(!a.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}s.keys=function(){return Object.keys(r)},s.resolve=n,e.exports=s,s.id=372},72:function(e,t,a){"use strict";a.r(t);var r=a(11),s=a(12),n=a(14),i=a(13),o=a(15),c=a(0),l=a.n(c),p=a(218),m=a.n(p),u=(a(135),a(35)),d=function(e){function t(){var e,a;Object(r.a)(this,t);for(var s=arguments.length,o=new Array(s),c=0;c<s;c++)o[c]=arguments[c];return(a=Object(n.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(o)))).state={islogin:!1,tokenid:"",name:""},a.responseFacebook=function(e){console.log(e),a.setState({islogin:!0,tokenid:e.accessToken,name:e.name})},a.componentClicked=function(){return console.log("clicked")},a}return Object(o.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e;return e=this.state.islogin?l.a.createElement(u.a,{to:"/Facebookislogined"}):l.a.createElement(m.a,{render:function(e){return l.a.createElement("button",{disabled:e.enable},l.a.createElement("img",{alt:"",src:"http://pngimg.com/uploads/facebook_logos/facebook_logos_PNG19754.png",className:"facebookicon"}),"login with facebook")},appId:"202514100963607",autoLoad:!1,fields:"name,email,picture",onClick:this.componentClicked,callback:this.responseFacebook,size:"medium"}),l.a.createElement("div",null,e)}}]),t}(c.Component);t.default=d},73:function(e,t,a){"use strict";a.r(t);var r=a(11),s=a(12),n=a(14),i=a(13),o=a(15),c=a(0),l=a.n(c),p=a(50),m=function(e){function t(){return Object(r.a)(this,t),Object(n.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("section",{className:"main-brand"},l.a.createElement(p.a,{className:"navbar-brand",to:"/"},l.a.createElement("span",null,l.a.createElement("img",{id:"OudImage",src:"https://cdn.discordapp.com/attachments/691413676934299668/691744414204166164/Oud.png",className:"d-inline-block align-top",alt:"logo imag"}),l.a.createElement("p",{className:"Oud"},"Oud"))))}}]),t}(c.Component);t.default=m},802:function(e,t,a){"use strict";a.r(t);var r=a(11),s=a(12),n=a(14),i=a(13),o=a(15),c=a(0),l=a.n(c),p=function(e){function t(){return Object(r.a)(this,t),Object(n.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("p",null,"Facebook is entered just for prepare routing"))}}]),t}(c.Component);t.default=p},803:function(e,t,a){e.exports={doclets:{},displayName:"IsEntered",description:"",methods:[],props:[],examples:null}},806:function(e,t,a){e.exports={doclets:{},displayName:"Facebook",description:"",methods:[],props:[],examples:null}},807:function(e,t,a){"use strict";a.r(t);var r=a(62),s=a(11),n=a(12),i=a(14),o=a(13),c=a(15),l=a(0),p=a.n(l),m=(a(135),a(73)),u=a(45),d=a.n(u),j=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(o.a)(t).call(this,e))).handleShowPassword=function(e){return e.preventDefault(),a.setState({passwordType:"text"===a.state.passwordType?"password":"text",showText:"show"===a.state.showText?"hide":"show"}),!1},a.handelSubmit=function(e){e.preventDefault(),d.a.post("".concat("http://localhost:3000","/users"),a.state.email).then((function(e){"200"===e.status||e.status})).catch((function(e){})),console.log(a.state)},a.EmailHandel=function(e){a.setState({email:e.target.value});var t=RegExp(/^[a-zA-Z0-9.!#$%&\u2019+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)$/),s=Object(r.a)({},a.state.formErrors);s.EmailErorr=t.test(e.target.value)?"":"invalid email address",a.setState({formErrors:s})},a.state={UsernameOrEmail:"",code:"",error:{}},a}return Object(c.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){return p.a.createElement("div",{className:"container main-center"},p.a.createElement(m.default,null),p.a.createElement("section",{className:"social-form"},p.a.createElement("h2",{className:"pass-reset"},"Password Reset"),p.a.createElement("h6",{className:"title-text"},"Enter your email address that you used to register. We'll send you an email to reset your password."),p.a.createElement("section",{className:"main-form container"},p.a.createElement("form",{onSubmit:this.handelSubmit},p.a.createElement("div",{className:"form-group sm-8"},p.a.createElement("input",{required:!0,type:"email",className:"form-control",placeholder:"enter your email or username",onChange:this.EmailHandel}),p.a.createElement("button",{type:"button",className:"btn btn-outline-linkF",onClick:""},"Send code")),p.a.createElement("section",{className:"or-seperator-2"}),p.a.createElement("section",{className:"container main-center"},p.a.createElement("h6",{className:"hint-text"},"If you still need help, contact Oud team at",p.a.createElement("button",{type:"button",className:"btn btn-outline-link"},p.a.createElement("a",{href:"mailto:oudteam.sup@gmail.com"},"oudteam.sup@gmail.com"))))))))}}]),t}(l.Component);t.default=j},824:function(e,t,a){e.exports={doclets:{},displayName:"ForgotPassword",description:"",methods:[],props:[],examples:null}},825:function(e,t,a){e.exports={doclets:{},displayName:"MainBrand",description:"",methods:[],props:[],examples:null}},826:function(e,t,a){"use strict";a.r(t);var r=a(63),s=a(62),n=a(11),i=a(12),o=a(14),c=a(13),l=a(15),p=a(0),m=a.n(p),u=(a(135),a(35)),d=a(50),j=a(73),E=a(138),_=a(45),S=a.n(_),h=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(o.a)(this,Object(c.a)(t).call(this,e))).EmailHandel=function(e){a.setState({email:e.target.value});var t=RegExp(/^[a-zA-Z0-9.!#$%&\u2019+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)$/),r=Object(s.a)({},a.state.formErrors);r.EmailErorr=t.test(e.target.value)?"":"invalid email address",a.setState({formErrors:r})},a.handleShowPassword=function(e){return e.preventDefault(),a.setState({passwordType:"text"===a.state.passwordType?"password":"text",showText:"show"===a.state.showText?"hide":"show"}),!1},a.setRedirect=function(){a.setState({redirect:!0})},a.toSignUp=function(){if(a.state.redirect)return m.a.createElement(u.a,{to:"/"})},a.handelSubmit=function(e){e.preventDefault(),S.a.post("".concat("http://localhost:3000","/users"),{password:a.state.password,email:a.state.email}).then((function(e){console.log(e.data)})),S.a.get("".concat("http://localhost:3000","/users")).then((function(e){"200"===e.status?a.setState.islogin=!0:"400"!==e.status&&"429"!==e.status||a.setState({errors:e.data}),console.log(e.status),console.log(a.state)}))},a.handleChange=function(e){var t=e.target,s="checkbox"===t.type?t.checked:t.value,n=t.name;a.setState(Object(r.a)({},n,s))},a.state={islogin:!1,email:"",password:"",passwordType:"password",showText:"show",rememberMe:!1,redirect:!1,formErrors:{EmailErorr:""}},a}return Object(l.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){console.log(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_API_URL:"http://localhost:3000"}))}},{key:"render",value:function(){return m.a.createElement("div",{className:"container main-center"},m.a.createElement(j.default,null),m.a.createElement("section",{className:"social-form"},m.a.createElement(E.default,null),m.a.createElement("section",{className:"main-form container"},m.a.createElement("form",{onSubmit:this.handelSubmit},m.a.createElement("div",{className:"form-group sm-8"},m.a.createElement("input",{required:!0,type:"email",name:"email",className:"form-control",placeholder:"email@address.com",onChange:(this.handleChange,this.EmailHandel)})),m.a.createElement("div",{className:"form-group"},m.a.createElement("div",{className:"input-group"},m.a.createElement("input",{required:!0,name:"password",type:this.state.passwordType,className:"form-control",placeholder:"password",onChange:this.handleChange}),m.a.createElement("button",{className:"btn btn-outline-secondary",onClick:this.handleShowPassword},this.state.showText))),m.a.createElement("div",{className:"form-group"},m.a.createElement("div",{className:"pretty p-svg p-curve container"},m.a.createElement("input",{type:"checkbox",id:"gridCheck",className:"form-check-input",name:"rememberMe",onChange:this.handleChange}),m.a.createElement("div",{className:"state p-success"},m.a.createElement("svg",{className:"svg svg-icon",viewBox:"0 0 20 20"},m.a.createElement("path",{d:"M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z",style:{stroke:"white",fill:"white"}})),m.a.createElement("label",{htmlFor:"gridCheck"},"Remember me")))),m.a.createElement("section",{className:"container main-center"},m.a.createElement("h6",{className:"hint-text-forgot"},m.a.createElement("button",{type:"button",className:"btn btn-outline-link"},m.a.createElement(d.a,{to:"/password-reset"},"Forgot your password?")))),m.a.createElement("button",{type:"submit",className:"btn btn-primary btn-block"},"Sign In"),m.a.createElement("section",{className:"or-seperator-2"}),m.a.createElement("section",{className:"container main-center"},m.a.createElement("span",null,this.toSignUp(),m.a.createElement("h6",{className:"hint-text"},"Don't have an account?",m.a.createElement("br",null),m.a.createElement("button",{type:"button",className:"btn btn-outline-links",onClick:this.setRedirect},"SIGN UP"))))))))}}]),t}(p.Component);t.default=h},827:function(e,t,a){e.exports={doclets:{},displayName:"signup",description:"",methods:[],props:[],examples:null}},828:function(e,t,a){e.exports={doclets:{},displayName:"SocialIcons",description:"",methods:[],props:[],examples:null}},829:function(e,t,a){e.exports={doclets:{},displayName:"MainBrand",description:"",methods:[],props:[],examples:null}},830:function(e,t,a){"use strict";a.r(t);var r=a(63),s=a(62),n=a(11),i=a(12),o=a(14),c=a(13),l=a(15),p=a(0),m=a.n(p),u=(a(831),a(35)),d=a(146),j=a.n(d),E=a(139),_=a(140),S=a(221),h=a.n(S),g=a(45),y=a.n(g),f=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(o.a)(this,Object(c.a)(t).call(this,e))).EmailHandel=function(e){a.setState({email:e.target.value});var t=RegExp(/^[a-zA-Z0-9.!#$%&\u2019+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)$/),r=Object(s.a)({},a.state.formErrors);r.EmailErorr=t.test(e.target.value)?"":"invalid email address",a.setState({formErrors:r})},a.PasswordHandel=function(e){a.setState({Password:e.target.value}),0===a.state.Password.length?a.setState({formErrors:{PasswordErorr:"you must enter a password here",ConfirmPasswordErorr:a.state.formErrors.ConfirmPasswordErorr,EmailErorr:a.state.formErrors.EmailErorr}}):a.state.Password.length<8?a.setState({formErrors:{PasswordErorr:"minimum 8 characaters required",ConfirmPasswordErorr:a.state.formErrors.ConfirmPasswordErorr,EmailErorr:a.state.formErrors.EmailErorr}}):a.state.Password.length>30?a.setState({formErrors:{PasswordErorr:"maximum 30 characaters",ConfirmPasswordErorr:a.state.formErrors.ConfirmPasswordErorr,EmailErorr:a.state.formErrors.EmailErorr}}):function(e){var t,a,r=!1,s=!1,n=e+"0",i=/[0-9]/g;a=n.match(i).length>1,t=(n=e+"@").match(i=/[!@#$%^&*(),.?":{}_|<>]/g).length>1;for(var o=0;o<e.length;o++)e[o]===e[o].toUpperCase()?r=!0:e[o]===e[o].toLowerCase()&&(s=!0);return t&&a&&r&&s}(a.state.Password)?a.setState({formErrors:{PasswordErorr:"",ConfirmPasswordErorr:a.state.formErrors.ConfirmPasswordErorr,EmailErorr:a.state.formErrors.EmailErorr}}):a.setState({formErrors:{PasswordErorr:"Password should contain uppercase,lowercase and a number ",ConfirmPasswordErorr:a.state.formErrors.ConfirmPasswordErorr,EmailErorr:a.state.formErrors.EmailErorr}})},a.ConfirmPasswordHandel=function(e){a.setState({ConfirmPassword:e.target.value}),e.target.value!==a.state.Password?a.setState({formErrors:{PasswordErorr:a.state.formErrors.PasswordErorr,ConfirmPasswordErorr:"Invallid  ,Password not matched",EmailErorr:a.state.formErrors.EmailErorr}}):a.setState({formErrors:{PasswordErorr:a.state.formErrors.PasswordErorr,ConfirmPasswordErorr:"",EmailErorr:a.state.formErrors.EmailErorr}})},a.hasSamePassword=function(){return a.state.Password===a.state.ConfirmPassword},a.hasSameEmail=function(){return a.state.email===a.state.ConfirmEmail},a.handelSubmit=function(e){if(e.preventDefault(),a.state.isVerified&&!0===a.hasSamePassword()){var t=a.state.day+"-"+a.state.month+"-"+a.state.year;console.log(t),a.setState({formErrors:{PasswordErorr:a.state.formErrors.PasswordErorr,ConfirmPasswordErorr:"",EmailErorr:a.state.formErrors.EmailErorr}}),y.a.post("".concat("http://localhost:3000","/users"),a.state).then((function(e){})).catch((function(e){console.log(e)})),console.log(a.state),console.dir(e.target)}else!1===a.hasSamePassword()&&a.setState({formErrors:{PasswordErorr:a.state.formErrors.PasswordErorr,ConfirmPasswordErorr:"Invallid  ,Password not matched",EmailErorr:a.state.formErrors.EmailErorr}})},a.handleShowPassword=function(e){return e.preventDefault(),a.setState({PasswordType:"text"===a.state.PasswordType?"Password":"text",showText:"show"===a.state.showText?"hide":"show"}),!1},a.callback=function(){console.log("yaaaaaaaa, captha is loaded")},a.verifyCallback=function(e){e&&a.setState({isVerified:!0})},a.handleChange=function(e){var t=e.target,s="checkbox"===t.type?t.checked:t.value,n=t.name;a.setState(Object(r.a)({},n,s))},a.setRedirect=function(){a.setState({redirect:!0})},a.toSignIN=function(){if(a.state.redirect)return m.a.createElement(u.a,{to:"/log-in"})},a.state={name:"",email:"",gender:"",year:"",month:"",day:"",roll:"free",PasswordType:"Password",showText:"show",isVerified:!0,agreeTerms:!0,Password:"",ConfirmPassword:"",formErrors:{ConfirmPasswordErorr:"",PasswordErorr:"",EmailErorr:""},redirect:!1},a}return Object(l.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return m.a.createElement("div",{className:"container main-center"},m.a.createElement(E.default,null),m.a.createElement("section",{className:"social-form"},m.a.createElement(_.default,null),this.signupForm()))}},{key:"signupForm",value:function(){return m.a.createElement("section",{className:"main-form container"},m.a.createElement("form",{onSubmit:this.handelSubmit},this.userName(),this.emailAddress(),this.Password(),this.confirmPassword(),this.gender(),this.birthDate(),this.conditionsAndTerms(),this.Recaptcha(),this.signUp()))}},{key:"signUp",value:function(){return m.a.createElement(m.a.Fragment,null,m.a.createElement("button",{type:"submit",className:"btn btn-primary btn-block"},"Sign Up"),m.a.createElement("section",{className:"or-seperator-2"}),m.a.createElement("section",{className:"container main-center"},m.a.createElement("span",null,this.toSignIN(),m.a.createElement("h6",{className:"hint-text"},"Already registered?",m.a.createElement("button",{type:"button",className:"btn btn-outline-links",onClick:this.setRedirect},"SignIn")))))}},{key:"Recaptcha",value:function(){return m.a.createElement("div",{className:"rc-captcha container"},m.a.createElement(h.a,{sitekey:"6Ld5Ht8UAAAAADUJ6PLpOY_x5YSBfe9fRsYDEiVv",render:"explicit",onloadCallback:this.callback,verifyCallback:this.verifyCallback}))}},{key:"conditionsAndTerms",value:function(){return m.a.createElement("div",{className:"form-group"},m.a.createElement("div",{className:"pretty p-svg p-curve container"},m.a.createElement("input",{type:"checkbox",id:"gridCheck",className:"form-check-input"}),m.a.createElement("div",{className:"state p-success"},m.a.createElement("svg",{className:"svg svg-icon",viewBox:"0 0 20 20"},m.a.createElement("path",{d:"M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z",style:{stroke:"white",fill:"white"}})),m.a.createElement("label",{htmlFor:"gridCheck",className:"form-check-label"},m.a.createElement("a",{href:"/terms-conditions",target:"_black"},"Accept terms & conditions of use")))))}},{key:"birthDate",value:function(){return m.a.createElement("div",{className:"form-row"},this.year(),this.month(),this.day())}},{key:"day",value:function(){return m.a.createElement("div",{className:"form-group col-md-4"},m.a.createElement("select",{"data-testid":"register-dob-day",id:"inputDay",className:"form-control form-col custom-select",defaultValue:"Day",name:"day",onChange:this.handleChange},m.a.createElement("option",{value:""},"Day"),j.a.range(1,32).map((function(e){return m.a.createElement("option",{key:e,value:e},e)}))))}},{key:"month",value:function(){return m.a.createElement("div",{className:"form-group col-md-4"},m.a.createElement("select",{"data-testid":"register-dob-month",id:"inputMonth",className:"form-control form-col custom-select",defaultValue:"Month",name:"month",onChange:this.handleChange},m.a.createElement("option",{value:""},"Month"),m.a.createElement("option",{value:"01"},"January"),m.a.createElement("option",{value:"02"},"February"),m.a.createElement("option",{value:"03"},"March"),m.a.createElement("option",{value:"04"},"April"),m.a.createElement("option",{value:"05"},"May"),m.a.createElement("option",{value:"06"},"June"),m.a.createElement("option",{value:"07"},"July"),m.a.createElement("option",{value:"08"},"August"),m.a.createElement("option",{value:"09"},"September"),m.a.createElement("option",{value:"10"},"October"),m.a.createElement("option",{value:"11"},"November"),m.a.createElement("option",{value:"12"},"December")))}},{key:"year",value:function(){return m.a.createElement("div",{className:"form-group col-md-4"},m.a.createElement("select",{"data-testid":"register-dob-year",id:"inputYear",className:"form-control form-col custom-select",defaultValue:"Year",name:"year",onChange:this.handleChange},m.a.createElement("option",{value:""},"Year"),j.a.range(2018,1899).map((function(e){return m.a.createElement("option",{key:e,value:e},e)}))))}},{key:"gender",value:function(){return m.a.createElement("div",{className:"form-group"},m.a.createElement("select",{"data-testid":"register-male",id:"inputGender",className:"form-control form-col custom-select",onChange:this.handleChange,name:"gender"},m.a.createElement("option",{value:""},"Gender"),m.a.createElement("option",{value:"1",defaultValue:!0},"Male"),m.a.createElement("option",{value:"2"},"Female")))}},{key:"confirmPassword",value:function(){return m.a.createElement("div",{className:"form-group"},m.a.createElement("div",{className:"input-group"},m.a.createElement("input",{"data-testid":"register-confirmPassword",type:this.state.PasswordType,className:"form-control",placeholder:"confirm Password",onChange:(this.handleChange,this.ConfirmPasswordHandel),name:"confirmPassword",value:this.setState.ConfirmPassword})),!1===this.hasSamePassword()?this.state.formErrors.ConfirmPasswordErorr.length>0&&m.a.createElement("span",{className:"error",for:"register-confirmPassword"},this.state.formErrors.ConfirmPasswordErorr):null)}},{key:"Password",value:function(){return m.a.createElement("div",{className:"form-group"},m.a.createElement("div",{className:"input-group"},m.a.createElement("input",{"data-testid":"register-password",type:this.state.PasswordType,className:"form-control",placeholder:"Password",onChange:(this.handleChange,this.PasswordHandel),name:"Password",value:this.setState.Password}),m.a.createElement("button",{className:"btn btn-outline-dark",onClick:this.handleShowPassword},this.state.showText)),this.state.formErrors.PasswordErorr.length>0&&m.a.createElement("span",{className:"error",for:"register-password"},this.state.formErrors.PasswordErorr))}},{key:"emailAddress",value:function(){return m.a.createElement("div",{className:"form-group"},m.a.createElement("input",{"data-testid":"register-email",type:"email",className:"form-control custom-select",placeholder:"email@address.com",onChange:(this.handleChange,this.EmailHandel),name:"email"}),this.state.formErrors.EmailErorr.length>0&&m.a.createElement("span",{className:"error",for:"register-email"},this.state.formErrors.EmailErorr))}},{key:"userName",value:function(){return m.a.createElement("div",{className:"form-group sm-8"},m.a.createElement("input",{"data-testid":"register-displayname",value:this.state.name,label:"name",type:"text",className:"form-control custom-select",id:"validationTextarea",placeholder:"What should we call you?",onChange:this.handleChange,name:"name"}))}}]),t}(p.Component);t.default=f},831:function(e,t,a){},832:function(e,t,a){e.exports={doclets:{},displayName:"Signup",description:"",methods:[],props:[{type:{name:"union",value:[{name:"number"},{name:"string"}]},required:!1,description:'Description of prop "baz".',tags:{},name:"baz"},{type:{name:"number"},required:!1,description:'Description of prop "foo".',tags:{},name:"foo"}],examples:null}},833:function(e,t,a){e.exports={doclets:{},displayName:"SocialIcons",description:"",methods:[],props:[],examples:null}}},[[222,1,2]]]);