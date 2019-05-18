var sjPortfolio = (function (d, w, $) {
	var sjPortfolio = sjPortfolio || {};

	(function(){
		var get = {
			paramVal: function (name) {
				name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
				var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
					results = regex.exec(location.search);
				return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
			}
		}
		var PARAMVALUE = get.paramVal('apply');
		switch (PARAMVALUE) { case "ca": oApplyName = { en: "Y2FzYW1pYQ==", kr: "J+yDiOuhnOyatCDsi5zsnpEsIOq5jOyCrOuvuOyVhOyZgCDtlajqu5gnPGJyPuq5jOyCrOuvuOyVhOyZgCDtlajqu5jtlZjqs6Ag7Iu27J2A", txt: "J+ybuSDsoJHqt7zshLEg7ZKI7KeI7J247KadIC8g64yA6riw7JeFIO2UhOuhnOygne2KuCAvIOyKpO2BrOumve2EsCcg6rK966Cl64yA67mEIO2Sjeu2gO2VnCDsi6TrrLTqsr3tl5jsnpAg7Ju5IO2NvOu4lOumrOyFlCDrsJXsiJjsoJXsnoXri4jri6QuPGJyPuuPhOyYiO2VmeqzvCDsoITqs7XsnLzroZwg6rCB7KKFIOumrOu5mSwg6rO17JiIIO2OmOyWtCDssLjqsIAm6rSA656MIOqyve2XmOqzvCDtmYgg7YWM7J2067iUIOuNsOy9lCDsiJjsl4XsnLzroZwg7J6Q7Jew7Iqk65+96rKMIO2ZiO2NvOuLiOyLseyXkCDrjIDtlZwg66eO7J2AIOq0gOyLrOydhCDrkZDqsowg65CY7JeI7Iq164uI64ukLjxicj4g6rmM7IKs66+47JWE64qUIOq1reuCtCAx7IS464yAIO2ZiCDtjbzri4jsi7Eg6riw7JeF7Jy866GcIOyhsOyDgeqyqeydtOuvuOyngOyZgOuKlCDri6zrpqwg7Iuc64yA67OEIOyLnOyepSDrs4DtmZTsl5Ag6rCA7J6lIOyemCDsoIHsnZHtlZjqs6Ag7J6I64qUIOq4sOyXhSDsnoXri4jri6QuIOqyveyfgeyCrOyduCDquIDroZzrsowg7ZmI7Y2864uI7IuxIOq4sOyXhSDsnbTsvIDslYTripQgMjAxOOuFhCA57JuUIOyghOq1req1rCDrsLDshqHrp53snYQg6rCW7LaU66mwIOqzteyLneyggeycvOuhnCDsmKjrnbzsnbgg7YyQ66ek7JeQIOuPjOyehe2VmOyYgOyKteuLiOuLpC4g7Jio65287J24IOuwjyDrqqjrsJTsnbwg7YyQ66ek6rCAIOuRkOuTnOufrOyngOuKlCDqta3rgrQg7IaM67mEIO2MqO2EtOydhCDqs6DroKTtlZjrqbQg7Jio65287J247Iuc7J6l7J20IOynhOynnCDsirnrtoDsspjroZwg7JiI7IOB65Cp64uI64ukLiDsnKDthrXrp53snYQg7KeA64uMIOq5jOyCrOuvuOyVhOydmCDqsr3smrAg7Jio65287J24IOyLnOyepeydmCDshLHsnqXsl5Ag6riw64yA7Ja0IOyYqOudvOyduOuqsOydmCDqsJXtmZTripQg7ZWE7IiY7KCB7J6F64uI64ukLiDtj4nshowg6rmM7IKs66+47JWE7JeQIOq0gO2VnCDqtIDsi6zqs7wg7KCE66y47ISx7J2EIOuwlO2DleycvOuhnCDquYzsgqzrr7jslYQg7Jio65287J2466qw7J2YIOuNlOyasSDqsJXtmZTrkJwg7ZSE66Gg7Yq47JeU65OcIOuwnOyghOyXkCDtlajqu5jtlZjqs6Ag7Iu27Ja0IOq5jOyCrOuvuOyVhOyXkCDsp4Dsm5DtlZjqsowg65CY7JeI7Iq164uI64ukLg==" }; break; case "pen": oApplyName = { en: "UEVOR1RBSQ==", kr: "4oCY7J287ZWY6rOgIOyLtuydgCDsppDqsbDsmrQg7KeB7J6l4oCZIO2Oke2DgOydtOyXkOyEnCBQUk/qsIAg65CY6rOgIA==", txt: "7Ju5IOygkeq3vOyEsSDtkojsp4jsnbjspp0g6rK97ZeY7J2AIOusvOuhoCw8YnI+7IK87ISxIFNEUywgQ0ogSGVsbG8g65OxPGJyPuuMgOq4sOyXhSDtlITroZzsoJ3tirgg6rK97ZeY7J20IO2Sjeu2gO2VnCDsm7kg7Y2867iU66as7IWUIOuwleyImOygleyeheuLiOuLpC48YnI+IOuqqOyFmCDsnpHsl4XrtoDthLAgb3BlbiBhcGnsnZgg7IKs7JqpLDxicj4ganNvbi9vYmplY3TsmYAg6rCZ7J2AIOq1rOyhsO2ZlOuQnCDrjbDsnbTthLAg7KCc7J6R6rO8PGJyPiDqt7jsnZgg7YyM7IuxIOuwjyDrj5nsoIEg7Lac66ClIOyekeyXhSDrk7Eg7Y+t64ST7J2AIOyLpOustCDqsr3tl5jsnbQg7J6I7Iq164uI64ukLiA8YnI+7ZiE7J6s64qUIOu4jOudvOyasOyggCDsmbjrtoAg7ZmY6rK97JeQ7ISc7J2YIOyekOuwlOyKpO2BrOumve2KuOyXkCDrjIDtlZwg7Zi46riw7Ius7Jy866GcPGJyPiBOb2RlLmpz66W8IO2VmeyKtSDspJHsnoXri4jri6Qu" }; break; case "in": oApplyName = { en: "7J247YSw7YyM7YGs", kr: "7J247YSw7YyM7YGs7JeQ7IScIFVJ6rCc67Cc7J6Q66GcIO2VqOq7mO2VmOqzoCA=", txt:"7Ju5IOygkeq3vOyEsSDtkojsp4jsnbjspp0g6rK97ZeY7J2AIOusvOuhoCw8YnI+7IK87ISxIFNEUywgQ0ogSGVsbG8g65OxPGJyPuuMgOq4sOyXhSDtlITroZzsoJ3tirgg6rK97ZeY7J20IO2Sjeu2gO2VnCDsm7kg7Y2867iU66as7IWUIOuwleyImOygleyeheuLiOuLpC48YnI+IOuqqOyFmCDsnpHsl4XrtoDthLAgb3BlbiBhcGnsnZgg7IKs7JqpLDxicj4ganNvbi9vYmplY3TsmYAg6rCZ7J2AIOq1rOyhsO2ZlOuQnCDrjbDsnbTthLAg7KCc7J6R6rO8PGJyPiDqt7jsnZgg7YyM7IuxIOuwjyDrj5nsoIEg7Lac66ClIOyekeyXhSDrk7Eg7Y+t64ST7J2AIOyLpOustCDqsr3tl5jsnbQg7J6I7Iq164uI64ukLiA8YnI+7ZiE7J6s64qUIOu4jOudvOyasOyggCDsmbjrtoAg7ZmY6rK97JeQ7ISc7J2YIOyekOuwlOyKpO2BrOumve2KuOyXkCDrjIDtlZwg7Zi46riw7Ius7Jy866GcPGJyPiBOb2RlLmpz66W8IO2VmeyKtSDspJHsnoXri4jri6Qu" }; break; case "ka": oApplyName = { en: "a2FrYW8=", kr: "7Lm07Lm07JikIO2BrOujqOqwgCDrkJjqs6A=", txt: "IOybueygkeq3vOyEsSDtkojsp4jsnbjspp0g6rK97ZeY7J2AIOusvOuhoCw8YnI+7IK87ISxIFNEUywgQ0ogSGVsbG8g65OxPGJyPuuMgOq4sOyXhSDtlITroZzsoJ3tirgg6rK97ZeY7J20IO2Sjeu2gO2VnCDsm7kg7Y2867iU66as7IWUIOuwleyImOygleyeheuLiOuLpC48YnI+IOuqqOyFmOyekeyXheu/kCDslYTri4jrnbwgb3BlbiBhcGnsnZgg7IKs7JqpLDxicj4ganNvbi9vYmplY3TsmYAg6rCZ7J2AIOq1rOyhsO2ZlOuQnCDrjbDsnbTthLAg7KCc7J6R6rO8PGJyPiDqt7jsnZgg64+Z7KCBIOy2nOugpSDsnpHsl4Ug65OxIO2PreuEk+ydgCDsi6TrrLTqsr3tl5jsnbQg7J6I7Iq164uI64ukLiA8YnI+7ZiE7J6s64qUIOu4jOudvOyasOyggCDsmbjrtoAg7ZmY6rK97JeQ7ISc7J2YIOyekOuwlOyKpO2BrOumve2KuOyXkCDrjIDtlZwg7Zi46riw7Ius7Jy866GcPGJyPiBOb2RlLmpz66W8IO2VmeyKteykkeyeheuLiOuLpC48YnI+IOy5tOy5tOyYpOydmCDshLHqs7Ug7KO87JqUIOybkOyduCDspJEg7ZWY64KY64qUIO2DgOydtOuwjeyeheuLiOuLpC48YnI+IOyKpOuniO2KuO2PsCDsi5zsnqXsnbQg7ZmV64yA65CY642YIOyLnOuMgOydmCDsubTsubTsmKTthqHsl5DshJwsPGJyPuqzteyduOyduOymneyEnCDtj5Dsp4Drpbwg7JWe65GUIOyLnOuMgOydmCDsubTsubTsmKTtjpjsnbTquYzsp4A8YnI+7Ja47KCc64KYIOu5oOuluCDrs4DtmZTsnZgg7KSR7Ius7J207JeI642YIOy5tOy5tOyYpOyXkOyEnDxicj7stZzsi6DquLDsiKDsnYQg7Je07KCV7KCB7J24IOuPmeujjOuTpOqzvCDtlajqu5jtlZjqs6Ag7Iu27Iq164uI64ukLg==" }; break; default: oApplyName = { en: "", kr: "", txt:"" } }
	})();

	/**
	*
	*  Base64 encode / decode
	*  http://www.webtoolkit.info/
	*
	**/
	var Base64 = {

		// private property
		_keyStr : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",

		// public method for encoding
		encode : function (input) {
			var output = "";
			var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
			var i = 0;

			input = Base64._utf8_encode(input);

			while (i < input.length) {

				chr1 = input.charCodeAt(i++);
				chr2 = input.charCodeAt(i++);
				chr3 = input.charCodeAt(i++);

				enc1 = chr1 >> 2;
				enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
				enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
				enc4 = chr3 & 63;

				if (isNaN(chr2)) {
					enc3 = enc4 = 64;
				} else if (isNaN(chr3)) {
					enc4 = 64;
				}

				output = output +
				this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) +
				this._keyStr.charAt(enc3) + this._keyStr.charAt(enc4);

			}

			return output;
		},

		// public method for decoding
		decode : function (input) {
			var output = "";
			var chr1, chr2, chr3;
			var enc1, enc2, enc3, enc4;
			var i = 0;

			input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

			while (i < input.length) {

				enc1 = this._keyStr.indexOf(input.charAt(i++));
				enc2 = this._keyStr.indexOf(input.charAt(i++));
				enc3 = this._keyStr.indexOf(input.charAt(i++));
				enc4 = this._keyStr.indexOf(input.charAt(i++));

				chr1 = (enc1 << 2) | (enc2 >> 4);
				chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
				chr3 = ((enc3 & 3) << 6) | enc4;

				output = output + String.fromCharCode(chr1);

				if (enc3 != 64) {
					output = output + String.fromCharCode(chr2);
				}
				if (enc4 != 64) {
					output = output + String.fromCharCode(chr3);
				}

			}

			output = Base64._utf8_decode(output);

			return output;

		},

		// private method for UTF-8 encoding
		_utf8_encode : function (string) {
			string = string.replace(/\r\n/g,"\n");
			var utftext = "";

			for (var n = 0; n < string.length; n++) {

				var c = string.charCodeAt(n);

				if (c < 128) {
					utftext += String.fromCharCode(c);
				}
				else if((c > 127) && (c < 2048)) {
					utftext += String.fromCharCode((c >> 6) | 192);
					utftext += String.fromCharCode((c & 63) | 128);
				}
				else {
					utftext += String.fromCharCode((c >> 12) | 224);
					utftext += String.fromCharCode(((c >> 6) & 63) | 128);
					utftext += String.fromCharCode((c & 63) | 128);
				}

			}

			return utftext;
		},

		// private method for UTF-8 decoding
		_utf8_decode : function (utftext) {
			var string = "";
			var i = 0;
			var c = c1 = c2 = 0;

			while ( i < utftext.length ) {

				c = utftext.charCodeAt(i);

				if (c < 128) {
					string += String.fromCharCode(c);
					i++;
				}
				else if((c > 191) && (c < 224)) {
					c2 = utftext.charCodeAt(i+1);
					string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
					i += 2;
				}
				else {
					c2 = utftext.charCodeAt(i+1);
					c3 = utftext.charCodeAt(i+2);
					string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
					i += 3;
				}

			}

			return string;
		}
	}

	var sKvFrame = '.kv-frame-con',
	sKvBg = '.kv-bg',
	oApplyName;

	var frameIdx = 0;
	var kvMotion = {
		select : {
			aBgList : ['note9', 'cj_rental', 'samsung-event']	
		},
		appendBg : function(){
			var $self = this;
			var bgHtml = '<div class="kv-bg"></div>';

			$.each($self.select.aBgList, function(i){
				$(sKvFrame).prepend(bgHtml);	
			});
			
			$(sKvFrame).find(sKvBg).each(function(i){
				$(this).css('background-image', 'url(./images/background/frame_bg/' + $self.select.aBgList[i] + '.png)');
				if( i === $(sKvFrame).find(sKvBg).length -1 ){
					$(this).addClass('color-animate')
				}
			})
		},
		loopFrame : function () {
			var $self = kvMotion;
			$('.kv-bg.color-animate').one('oanimationend animationend webkitAnimationEnd', function () {
				var $this = $(this);
				if (frameIdx + 1 === $self.select.aBgList.length) {
					frameIdx = 0;
				} else {
					frameIdx++
				}
				$(sKvFrame).find(sKvBg).hide().removeClass('color-animate');;

				$(sKvFrame).find(sKvBg).eq(frameIdx - 1).show().addClass('color-animate');
				$self.loopFrame();
			});

		}
	}

	var chart = {
		select : {
			sSlickActive : '.slick-active',
			sChart : '.slick-active .work-list-bg',
			sText : '.work-list-text',
			sPercentNum : '.percent-number',
			sCircleInner : '.circle-mask-inner'
		},
		getPercentData : function(){
			var aPercent = [50, 100, 100, 100, 100, 100],
				slickIdx = $(this.select.sSlickActive).index() - 1;
            this.select.percentData = aPercent[slickIdx];
		},
		reset : function(){
			var $percentNumber = $(this.select.sSlickActive).find(this.select.sText).find(this.select.sPercentNum);
            $percentNumber.text(0);
		},
		chartAct : function(){
			var $circleLeft = $(this.select.sChart).find('.circle-left ' + this.select.sCircleInner)
                .css({ transform: 'rotate(0)' }),
	            $circleRight = $(this.select.sChart).find('.circle-right ' + this.select.sCircleInner)
	                .css({ transform: 'rotate(0)' }),
	        	$percentNumber = $(this.select.sSlickActive).find('.work-list-text').find(this.select.sPercentNum),
	            $self = this;

			$({ percent: 0 }).delay(0).animate({ percent: $self.select.percentData }, {
                duration: 1000, 
                progress: function () {
                    var now = this.percent,
                        deg = now * 360 / 100,
                        degRight = Math.min(Math.max(deg, 0), 180),
                        degLeft  = Math.min(Math.max(deg - 180, 0), 180);
                    $circleRight.css({ transform: 'rotate(' + degRight + 'deg)' });
                    $circleLeft.css({ transform: 'rotate(' + degLeft + 'deg)' });
                    $percentNumber.text(Math.floor(now));
                }
            })
		},
		init : function(){
			this.getPercentData();
			this.reset();
			this.chartAct();
		}
	}

	var progress = {
		act: function () {
			var $number = $('.number_box').find('> div');
			var number = [28, 44]
			$number.each(function (i) {
				var $number = $(this),
					$percentNumber = $number.find('.number'),
					percentData = number[i],
					second = 500;
				$percentNumber.text(0);

				$({ percent: 0 }).delay(second).animate({
					percent: percentData
				}, {
					duration: second,
						progress: function () {
							var now = this.percent;
							$percentNumber.text(Math.floor(now))
						}
					})
			})
		},
		reset: function () {
			$('.number_box').find('> div').find('.number').text(0);
		}
	}

	var checkParam = {
		changeText : function(){
			$('.kv .kv-txt-sub span').html(Base64.decode(oApplyName.kr));
			$('.about-me .about-me-greeting').html(Base64.decode(oApplyName.txt));
		},
		changeClass : function(){
			switch(Base64.decode(oApplyName.en)){
				case 'kakao' : 
				case 'PENGTAI' : 
					$('body').addClass(Base64.decode(oApplyName.en).toLowerCase());
				break;
			}

			if(oApplyName.en === '7J247YSw7YyM7YGs') $('body').addClass('in')
		}
	};

	var typedOpt = {
		kv: {
			strings: ['만나서 반갑습니다<br> <span class="yellow">'+ Base64.decode(oApplyName.en) +'!</span>'],
			stringsElement: null,
			typeSpeed: 30,
			backSpeed: 20,
			backDelay: 500,
			loop: false,
			showCursor: false,
			contentType: 'html'
		},
		title: {
			typeSpeed: 30,
			loop: false,
			showCursor: false,
			contentType: 'html'
		},
	}

	var fullpageAct = function () {
		$('#fullpage').fullpage({
			anchors: ['kv', 'about-me', 'work', 'thank'],
			sectionSelector: '.vertical-scrolling',
			navigation: true,
			controlArrows: false,
			onLeave: function (origin, destination, direction) {
				var $this = $(this),
					sTyped = 'typed';

				$this.find('.fp-tableCell').removeClass('is-active');

				switch (destination) {
					case 0:
						$('.kv-txt').text('').removeData(sTyped)
						break;
					case 1:
						progress.reset();
						$('.kv-txt').text('').removeData(sTyped);
						$this.find('.title').text('').removeData(sTyped);
						break;
					case 1:
					case 2:
					case 3:
						$this.find('.title').text('').removeData(sTyped);
						break;

				}

			},
			afterLoad: function (origin, destination, direction) {
				var txt =['About-me','work', '함께하고 싶습니다.'];
				var $this = $(this);
				if (destination !== 1) {
					typedOpt.title.strings = [txt[destination - 2]]
					$this.find('.title').typed(typedOpt.title);
				}
				$this.find('.fp-tableCell').addClass('is-active')
				switch (destination) {
					case 1:
						$('.kv-txt').typed(typedOpt.kv);
						break;
					case 2:
						progress.act();
						break;
					case 3:
						var activeIdx = $('.slick-active[id]').index();
						$('.work-list').slick('goTo', activeIdx-1);
					break;
				}
			}
		});
	}

	var slickAct = function () {
		var options = {
			arrows: true,
			dots: true,
			pauseOnHover: false,
			pauseOnDotsHover: false,
			pauseOnFocus: false,
			adaptiveHeight: true,
			slidesToShow: 1,
			slidesToScroll: 1
		};
		$('.work-list').slick(options).on('afterChange', function(event, slick, direction){
			chart.init();
		});
	}

	var movePen = function(){
		$(".kv").on("mousemove",function(e){		
			var posX= e.pageX;
			var posY= e.pageY;
			$(".pen").css({"right":100+(posX/20) , "bottom":80+(posY/20) });
		});
	};

	var jpreloader = function(readyCallback){
		/*
		* jPreLoader - jQuery plugin
		* Create a Loading Screen to preload images and content for you website
		*
		* Name:			jPreLoader.js
		* Author:		Kenny Ooi - http://www.inwebson.com
		* Date:			July 11, 2012		
		* Version:		2.1
		* Example:		http://www.inwebson.com/demo/jpreloader-v2/
		*	
		*/

		var items = new Array(),
			errors = new Array(),
			onComplete = function() {},
			current = 0;
		
		var jpreOptions = {
			splashVPos: '35%',
			loaderVPos: '75%',
			splashID: '#jpreContent',
			showSplash: true,
			showPercentage: true,
			autoClose: true,
			closeBtnText: 'Start!',
			onetimeLoad: false,
			debugMode: false,
			splashFunction: function() {}
		}
		
		//cookie
		var getCookie = function() {
			if( jpreOptions.onetimeLoad ) {
				var cookies = document.cookie.split('; ');
				for (var i = 0, parts; (parts = cookies[i] && cookies[i].split('=')); i++) {
					if ((parts.shift()) === "jpreLoader") {
						return (parts.join('='));
					}
				}
				return false;
			} else {
				return false;
			}
			
		}
		var setCookie = function(expires) {
			if( jpreOptions.onetimeLoad ) {
				var exdate = new Date();
				exdate.setDate( exdate.getDate() + expires );
				var c_value = ((expires==null) ? "" : "expires=" + exdate.toUTCString());
				document.cookie="jpreLoader=loaded; " + c_value;
			}
		}
		
		//create jpreLoader UI
		var createContainer = function() {
			
			jOverlay = $('<div></div>')
			.attr('id', 'jpreOverlay')
			.css({
				position: "fixed",
				top: 0,
				left: 0,
				width: '100%',
				height: '100%',
				zIndex: 9999999
			})
			.appendTo('body');
			
			if(jpreOptions.showSplash) {
				jContent = $('<div></div>')
				.attr('id', 'jpreSlide')
				.appendTo(jOverlay);
				
				var conWidth = $(window).width() - $(jContent).width();
				$(jContent).css({
					position: "absolute",
					top: jpreOptions.splashVPos,
					left: Math.round((50 / $(window).width()) * conWidth) + '%'
				});
				$(jContent).html($(jpreOptions.splashID).wrap('<div/>').parent().html());
				$(jpreOptions.splashID).remove();
				jpreOptions.splashFunction()			
			}
			
			jLoader = $('<div></div>')
			.attr('id', 'jpreLoader')
			.appendTo(jOverlay);
			
			var posWidth = $(window).width() - $(jLoader).width();
			$(jLoader).css({
				position: 'absolute',
				top: jpreOptions.loaderVPos,
				left: Math.round((50 / $(window).width()) * posWidth) + '%'
				
			});
			
			jBar = $('<div></div>')
			.attr('id', 'jpreBar')
			.css({
				width: '0%',
				height: '100%'
			})
			.appendTo(jLoader);
			
			if(jpreOptions.showPercentage) {
				jPer = $('<div class="percentage"></div>')
				.attr('id', 'jprePercentage')
				.css({
					position: 'relative',
					height: '100%'
				})
				.appendTo(jLoader)
				.html('Loading...');
			}
			if( !jpreOptions.autoclose ) {
				jButton = $('<div></div>')
				.attr('id', 'jpreButton')
				.on('click', function() {
					loadComplete();
				})
				.css({
					position: 'relative',
					height: '100%'
				})
				.appendTo(jLoader)
				.text(jpreOptions.closeBtnText)
				.hide();
			}
		}
		
		//get all images from css and <img> tag
		var getImages = function(element) {
			$(element).find('*:not(script)').each(function() {
				var url = "";

				if ($(this).css('background-image').indexOf('none') == -1 && $(this).css('background-image').indexOf('-gradient') == -1) {
					url = $(this).css('background-image');
					if(url.indexOf('url') != -1) {
						var temp = url.match(/url\((.*?)\)/);
						url = temp[1].replace(/\"/g, '');
					}
				} else if ($(this).get(0).nodeName.toLowerCase() == 'img' && typeof($(this).attr('src')) != 'undefined') {
					url = $(this).attr('src');
				}
				
				if (url.length > 0) {
					items.push(url);
				}
			});
		}
		
		//create preloaded image
		var preloading = function() {
			for (var i = 0; i < items.length; i++) {
				if(loadImg(items[i]));
			}
		}
		var loadImg = function(url) {
			var imgLoad = new Image();
			$(imgLoad)
			.load(function() {
				completeLoading();
			})
			.error(function() {
				errors.push($(this).attr('src'));
				completeLoading();
			})
			.attr('src', url);
		}
		
		//update progress bar once image loaded
		var completeLoading = function() {
			current++;

			var per = Math.round((current / items.length) * 100);
			$(jBar).stop().animate({
				width: per + '%'
			}, 500, 'linear');
			
			if(jpreOptions.showPercentage) {
				$(jPer).text(per+"%");
			}
			
			//if all images loaded
			if(current >= items.length) {
				current = items.length;
				setCookie();	//create cookie
				
				if(jpreOptions.showPercentage) {
					$(jPer).text("100%");
				}
				
				//fire debug mode
				if (jpreOptions.debugMode) {
					var error = debug();
				}
				
				
				//max progress bar
				$(jBar).stop().animate({
					width: '100%'
				}, 500, 'linear', function() {
					//autoclose on
					if( jpreOptions.autoClose )
						loadComplete();
					else
						$(jButton).fadeIn(1000);
						readyCallback()
				});	
			}	
		}
		
		//triggered when all images are loaded
		var loadComplete = function() {
			$(jOverlay).fadeOut(800, function() {
				$(jOverlay).remove();
				onComplete();	//callback function
			});
		}
		
		//debug mode
		var debug = function() {
			if(errors.length > 0) {
				var str = 'ERROR - IMAGE FILES MISSING!!!\n\r'
				str	+= errors.length + ' image files cound not be found. \n\r';	
				str += 'Please check your image paths and filenames:\n\r';
				for (var i = 0; i < errors.length; i++) {
					str += '- ' + errors[i] + '\n\r';
				}
				return true;
			} else {
				return false;
			}
		}
		
		$.fn.jpreLoader = function(options, callback) {
	        if(options) {
	            $.extend(jpreOptions, options );
	        }
			if(typeof callback == 'function') {
				onComplete = callback;
			}
			
			//show preloader once JS loaded
			$('body').css({
				'display': 'block'
			});
			
			return this.each(function() {
				if( !(getCookie()) ) {
					createContainer();
					getImages(this);
					preloading();
				}
				else {	//onetime load / cookie is set
					$(jpreOptions.splashID).remove();
					onComplete();
				}
			});
	    };
	};

	var readyInit = function(){
		$('.kv-txt').typed(typedOpt.kv);
		$('.kv').css('opacity',1);
		fullpageAct();
		movePen();
		if(oApplyName.en !== '') checkParam.changeText();
		kvMotion.appendBg();
		kvMotion.loopFrame();
		slickAct();
		/*console.log(Base64.encode(oApplyName.en))
		console.log(Base64.encode(oApplyName.kr))
		console.log(Base64.encode(oApplyName.txt))*/
	};

	sjPortfolio.init = function () {
		checkParam.changeClass();
		jpreloader(readyInit);
		$('body').jpreLoader({
			splashID: "#jSplash",
			loaderVPos: '48%',
			autoClose: true
		});	
	};

	return sjPortfolio;
})(document, window, jQuery);

$(document).ready(function () {
	sjPortfolio.init();
});