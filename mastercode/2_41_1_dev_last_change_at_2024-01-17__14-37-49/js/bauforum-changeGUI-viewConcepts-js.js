(window.webpackJsonp=window.webpackJsonp||[]).push([[224],{4119:function(a,c,l){(function(u,s,r,g){var b=Object.create,o=Object.defineProperty,f=Object.getOwnPropertyDescriptor,v=Object.getOwnPropertyNames,m=Object.getPrototypeOf,C=Object.prototype.hasOwnProperty,w=(t,e)=>{for(var n in e)o(t,n,{get:e[n],enumerable:!0})},d=(t,e,n,h)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of v(e))!C.call(t,i)&&i!==n&&o(t,i,{get:()=>e[i],enumerable:!(h=f(e,i))||h.enumerable});return t},y=(t,e,n)=>(n=t!=null?b(m(t)):{},d(e||!t||!t.__esModule?o(n,"default",{value:t,enumerable:!0}):n,t)),F=t=>d(o({},"__esModule",{value:!0}),t),p={};w(p,{default:()=>_}),a.exports=F(p);var k=y(l(4638)),M=l(4246),_=u.View.extend({events:{"click span":"showConcept","click .startFlight":"startFlight","click .stopFlight":"stopFlight","click #table-nav-concepts-panel-toggler":"toggleConceptsMenu","click [type='checkbox']":"toggleCheckbox"},initialize:function(t){this.listenTo(s.channel("Map"),{change:this.changeMap}),this.listenTo(s.channel("TableMenu"),{hideMenuElementConcepts:this.hideConceptsMenu}),this.listenTo(s.channel("FlightPlayer"),{stateChange:this.togglePlayButton}),this.model=t,r("#table-category-list").remove(),this.render(),this.showConceptsMenu()},template:g.template(k.default),className:"table-nav col-md-1",id:"table-concepts",render:function(){const t=this.model.toJSON();return r("#table-nav").children().first().after(this.$el.html(this.template(t))),s.request("TableMenu","getActiveElement")==="Concepts"&&this.$("#table-nav-concepts-panel").collapse("show"),this},toggleCheckbox:function(t){const e=t.currentTarget.checked;this.model.toggleStadtmodell(e)},showConcept:function(t){const e=t.target.nodeName==="LI"?t.target.id:t.target.parentElement.id;this.workWithBullets(t),this.model.triggerShowConcept(e)},workWithBullets:function(t){this.$(".concept_list span").removeClass("bauforum-icon-bullet_checked"),this.$(".concept_list span").addClass("bauforum-icon-bullet"),this.$(".concept_list .startFlight").addClass("disabled"),this.$(".concept_list .startFlight").removeClass("hidden"),this.$(".concept_list .stopFlight").addClass("hidden"),this.$(t.currentTarget).removeClass("bauforum-icon-bullet"),this.$(t.currentTarget).addClass("bauforum-icon-bullet_checked"),this.$(t.currentTarget.parentElement).find(".startFlight").removeClass("disabled")},changeMap:function(t){if(t==="2D"){const e=document.querySelectorAll(".concept_list li");for(let n=0;n<e.length;n++)this.$("#"+e[n].id+" > span").removeClass("bauforum-icon-bullet_checked"),this.$("#"+e[n].id+" > span").addClass("bauforum-icon-bullet")}},startFlight:function(t){const e=t.currentTarget.parentElement.id;this.$(t.currentTarget).hasClass("disabled")||this.model.triggerStartFlight(e)},stopFlight:function(t){this.$(t.currentTarget).hasClass("disabled")||this.model.triggerStopFlight()},toggleConceptsMenu:function(){this.$("#table-nav-concepts-panel").hasClass("in")?this.hideConceptsMenu():this.showConceptsMenu()},hideConceptsMenu:function(){this.$("#table-nav-concepts-panel").removeClass("in"),this.$el.removeClass("table-concepts-active"),s.trigger("TableMenu","deactivateCloseClickFrame")},showConceptsMenu:function(){this.$el.addClass("table-concepts-active"),this.$("#table-nav-concepts-panel").addClass("in"),s.request("TableMenu","setActiveElement","Concepts")},togglePlayButton:function(t){const e=this.$el.find(".bauforum-icon-bullet_checked");if(t==="play"){e.parent().find(".startFlight").addClass("hidden"),e.parent().find(".stopFlight").removeClass("hidden");return}e.parent().find(".startFlight").removeClass("hidden"),e.parent().find(".stopFlight").addClass("hidden")}})}).call(this,l(13),l(3),l(14),l(34))},4246:function(a,c,l){},4638:function(a,c){a.exports=`<div id="table-nav-concepts-panel" class="table-nav-concepts-panel collapse unselectable">\r
	<div class="table-concepts-container"></div>\r
	    <h1><%= mainStreet.heading1 %></h1>\r
	    <h2><%= mainStreet.heading2 %></h2>\r
	    <ul class="concept_list">\r
	    <% mainStreet.concepts.forEach((concept, index) => { %>\r
			<li id="<%= concept.conceptId %>" class="list-bullet">\r
                <span id="<%= concept.conceptId + '_' + index %>" class="bauforum-icon-bullet"/><%= concept.name %></span>\r
            	<button type="button" class="btn btn-link disabled startFlight">Fly it!</button>\r
            	<button type="button" class="btn btn-link hidden stopFlight">Stop!</button>\r
            </li>\r
		<% }); %>\r
		</ul>\r
		<div class="checkStadtmodell">\r
			<input type="checkbox" id="stadtmodell" name="stadtmodell" checked>\r
			<label for="stadtmodell">Hamburger Stadtmodell</label>\r
		</div>\r
	    <div id="funnel">\r
		    <div id="left-funnel-corner"></div>\r
		    <div id="middle-funnel"></div>\r
		    <div id="right-funnel-corner"></div>\r
		</div>\r
	</div>\r
</div>\r
<div id="table-nav-concepts-panel-toggler">\r
    <a id="table-nav-concepts-panel-icon" class="bauforum-icon-variants"></a>\r
</div>\r
`}}]);
