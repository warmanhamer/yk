define(["mui", "bscroll"], function(mui, bs) {
	var BS = null;
	var list = document.querySelector(".list");
	var add = document.querySelector(".add");
	init();

	function init() {
		mui.init();
		getdata();
		BS = new bs('.scroll', {
			probeType: 2,
			scrollBar: true,
			click: true
		});
		bindEvent();
	};

	function getdata() {
		mui.ajax("/api/getdata", {
			success: function(rs) {
				if (rs.code === 1) {
					render(rs.data)
				}
			}
		})
	}

	function render(data) {
		list.innerHTML = data.map(function(item) {
			return `<li data-id="${item._id}">
						<div class="title">
							<h3>${item.name}</h3>
							<span>${item.tel}</span>
						</div>
						<p class="main">
							${item.ad},${item.xxad}
						</p>
						<p>
							<span class="check">
								<input name="radio" type="radio" checked>
								<label>设置默认</label>
							</span>
							<span>
								<b class="del">删除</b>
								<b class="edit">修改</b>
							</span>
						</p>
					</li>`;
		}).join("");
		BS.refresh();
	}

	function bindEvent() {
		add.addEventListener("tap", function() {
			location.href = "dream/add.html";
		})
		deletefn();
	}

	function deletefn() {
		mui(".list").on("tap", ".del", function() {
			var id = this.parentNode.parentNode.parentNode.getAttribute("data-id");
			mui.ajax("/api/getdel", {
				data: {
					_id: id
				},
				success: function(rs) {
					if (rs.code === 1) {
						console.log(rs)
						location.reload();
					}
				}
			})
		})
		mui(".list").on("tap", ".edit", function() {
			var id = this.parentNode.parentNode.parentNode.getAttribute("data-id");
			location.href = "dream/edit.html?_id="+id;
		})
	}
})
