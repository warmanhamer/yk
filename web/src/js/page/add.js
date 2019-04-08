define(["mui"], function(mui) {
	var name = document.querySelectorAll("input")[0];
	var tel = document.querySelectorAll("input")[1];
	var adtel = document.querySelectorAll("input")[2];
	var ad = document.querySelectorAll("input")[3];
	var xxad = document.querySelectorAll("input")[4];
	var end = document.querySelector(".end");
	init();

	function init() {
		mui.init();
		bindEvent();
	}

	function bindEvent() {
		end.addEventListener("tap", function() {
			getadd(name.value, tel.value, adtel.value, ad.value, xxad.value);
		})
	}

	function getadd(name, tel, adtel, ad, xxad) {
		mui.ajax("/api/getadd", {
			data: {
				name,
				tel,
				adtel,
				ad,
				xxad
			},
			success(rs) {
				if (rs.code === 1) {
					console.log(rs)
					location.href = "/"
				}
			}
		})
	}
})
