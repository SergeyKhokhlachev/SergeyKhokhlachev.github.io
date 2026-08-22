function e(e){let t=``;for(let[n,r]of e)t+=`
			<div class="uikit-render__item">
				<div class="uikit-render__name">${n} :</div>
				<div class="uikit-render__value">${r}</div>
			</div>
		`;let n=`
		<div class="uikit-render">
			<h2>Send Form Data</h2>
			<div class="uikit-render__list">${t}</div>
		</div>
	`;window.app.modal.content(`#modal-render`,n),window.app.modal.open(`#modal-render`)}export{e as t};
//# sourceMappingURL=render-or7qyz4Q.js.map