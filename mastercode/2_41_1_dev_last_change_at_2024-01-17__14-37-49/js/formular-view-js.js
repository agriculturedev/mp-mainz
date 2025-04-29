(window.webpackJsonp=window.webpackJsonp||[]).push([[440],{4149:function(a,o,r){(function(p,f,g,b){var h=Object.create,i=Object.defineProperty,m=Object.getOwnPropertyDescriptor,k=Object.getOwnPropertyNames,v=Object.getPrototypeOf,x=Object.prototype.hasOwnProperty,z=(e,n)=>{for(var s in n)i(e,s,{get:n[s],enumerable:!0})},u=(e,n,s,c)=>{if(n&&typeof n=="object"||typeof n=="function")for(let t of k(n))!x.call(e,t)&&t!==s&&i(e,t,{get:()=>n[t],enumerable:!(c=m(n,t))||c.enumerable});return e},d=(e,n,s)=>(s=e!=null?h(v(e)):{},u(n||!e||!e.__esModule?i(s,"default",{value:e,enumerable:!0}):s,e)),w=e=>u(i({},"__esModule",{value:!0}),e),l={};z(l,{default:()=>O}),a.exports=w(l);var y=d(r(4131)),E=d(r(5836)),F=d(r(5837)),O=p.View.extend({events:{"keyup input[type=text]":"keyup","keyup textarea":"keyup","click input[type=radio]":"click","click input[type=checkbox]":"click","click button":"click","click a":"click",focusout:"focusout"},initialize:function(){const e=f.request("ModelList","getModelByAttributes",{id:"formular"}).attributes;this.model=new y.default(e),this.model.get("modelname")==="grenznachweis"&&(this.template=g.template(E.default),b("head").prepend("<style>"+F.default+"</style>")),this.listenTo(this.model,{"change:isActive render invalid":this.render}),this.model.get("isActive")===!0&&this.render(this.model,!0)},render:function(e,n){return n?(this.model.prepWindow(),this.setElement(document.getElementsByClassName("win-body")[0]),this.$el.html(this.template(e.toJSON())),this.delegateEvents()):(this.$el.empty(),this.undelegateEvents()),this},keyup:function(e){e.target.id&&this.model.keyup(e)},click:function(e){e.target.id&&this.model.click(e)},focusout:function(e){e.target.id&&this.model.focusout(e)}})}).call(this,r(13),r(3),r(34),r(14))},5836:function(a,o){a.exports=`<div class="panel panel-default grenznachweisdiv">
    <div class="panel-body">
        <div class="beschreibunggrenznachweis" <% if (activeDIV==='kundendaten') {print ('style="display:none;"');} %> >
            <div class="form-group <% if (errors.auftragsnummer !== undefined) print('has-error') %>">
                <p class="formularhead">Ihre Auftragsnummer</p>
                <input id="auftragsnummer" type="text" class="form-control" title="Hier k\xF6nnen Sie Ihre Auftragsnummer zur Identifikation angeben. " placeholder="Ihre Auftragsnummer" aria-describedby="sizing-addon2" value="<%=auftragsnummer%>">
                <% if (errors.auftragsnummer !== undefined) { %>
                    <span id="auftragsnummerError" class="col-xs-8 col-xs-offset-5 grenznachweiserrortext"><%= errors.auftragsnummer %></span>
                <% } %>
            </div>
            <div class="form-group <% if (errors.lage !== undefined) print('has-error') %>">
                <p class="formularhead2">Lagebeschreibung*</p>
                <textarea id="lagebeschreibung" class="form-control" title="Bitte geben Sie eine Lagebezeichnung \xFCber Gemarkung/Flurst\xFCck oder \xFCber Stra\xDFe/Hausnummer an." placeholder="Flurst\xFCcks- und / oder Lagebezeichnung" maxlength=300 rows=2 aria-describedby="sizing-addon2"><%=lage%></textarea>
                <% if (errors.lage !== undefined) { %>
                    <span id="lageError" class="col-xs-8 col-xs-offset-5 grenznachweiserrortext"><%= errors.lage %></span>
                <% } %>
            </div>
            <p class="formularhead2">Zweck*</p>
            <div class="container-fluid <% if (errors.zweck !== undefined) print('has-error') %>">
                <div class="row grenznachweisrow">
                    <div class="col-sm-6">
                        <div class="checkbox">
                            <h5>
                                <label class="grenznachweiszweck">
                                    <input id="zweckGebaeudeabsteckung" type="checkbox" <% if (zweckGebaeudeabsteckung === true) {print (' checked')} else {print (' unchecked')}; %>>
                                </label>Geb\xE4udeabsteckung
                            </h5>
                        </div>
                    </div><!-- /.col-lg-6 -->
                    <div class="col-sm-6">
                        <div class="checkbox">
                            <h5>
                                <label class="grenznachweiszweck">
                                    <input id="zweckLageplan" type="checkbox" <% if (zweckLageplan === true) {print (' checked')} else {print (' unchecked')}; %>>
                                </label>Lageplan
                            </h5>
                        </div>
                    </div><!-- /.col-lg-6 -->
                </div><!-- /.row -->
                <div class="row grenznachweisrow">
                    <div class="col-sm-6">
                        <div class="checkbox">
                            <h5>
                                <label class="grenznachweiszweck">
                                    <input id="zweckGebaeudeeinmessung" type="checkbox" <% if (zweckGebaeudeeinmessung === true) {print (' checked')} else {print (' unchecked')}; %>>
                                </label>Geb\xE4udeeinmessung
                            </h5>
                        </div>
                    </div><!-- /.col-lg-6 -->
                    <div class="col-sm-6">
                        <div class="checkbox">
                            <h5>
                                <label class="grenznachweiszweck">
                                    <input title="Bitte ggf. im Freitextfeld n\xE4her erl\xE4utern." id="zweckSonstiges" type="checkbox" <% if (zweckSonstiges === true) {print (' checked')} else {print (' unchecked')}; %>>
                                </label>Sonstiges
                            </h5>
                        </div>
                    </div><!-- /.col-lg-6 -->
                </div><!-- /.row -->
                <% if (errors.zweck !== undefined) { %>
                    <span id="zweckError" class="col-xs-8 col-xs-offset-5 grenznachweiserrortext"><%= errors.zweck %></span>
                <% } %>
            </div>
            <p class="formularhead2">Freitext</p>
            <textarea id="freitext" class="form-control" title="Detaillierte Informationen." placeholder="Was wir sonst noch wissen sollten, um Ihren Auftrag ausf\xFChren zu k\xF6nnen?" maxlength=600 rows=4 aria-describedby="sizing-addon2"><%=freitext%></textarea>
            <p class="formularhead2">Umringe erfassen*</p>
            <div class="btn-group btn-group-justified" role="group" aria-label="...">
                <div class="btn-group" role="group">
                    <button id="setgeometrie" type="button" class="
                        <% if (source.getFeatures().length === 0 && activatedInteraction === false) {print ('btn btn-primary">Starten');}
                        else if (source.getFeatures().length === 0 && activatedInteraction === true) {print ('btn btn-primary active"> Beenden');}
                        else if (source.getFeatures().length > 0 && activatedInteraction === false) {print ('btn btn-default">Starten');}
                        else if (source.getFeatures().length > 0 && activatedInteraction === true) {print ('btn btn-default active">Beenden');} %></button>
                </div>
                <div class="btn-group" role="group">
                    <button id="removegeometrie" type="button" class="btn btn-default" <% if (source.getFeatures().length === 0) {print ('disabled')}; %> >alle l\xF6schen</button>
                </div>
            </div>
            <% if (errors.source !== undefined) { %>
                <span id="sourceError" class="col-xs-8 col-xs-offset-5 grenznachweiserrortext"><%= errors.source %></span>
            <% } %>
        </div>

        <div class="kundendatengrenznachweis" <% if (activeDIV==='beschreibung') {print ('style="display:none;"');} %> >
            <p class="formularhead">Kundendaten:</p>
            <ul class="nav nav-pills">
                <li id="anrede1" role="presentation" class="<% if (kundenanrede === 'Herr') {print ('active')}; %>"><a id="anredeherr" href="#">Herr</a></li>
                <li id="anrede2" role="presentation" class="<% if (kundenanrede === 'Frau') {print ('active')}; %>"><a id="anredefrau" href="#">Frau</a></li>
                <li id="anrede3" role="presentation" class="<% if (kundenanrede === 'Firma') {print ('active')}; %>"><a id="anredefirma" href="#">Firma</a></li>
            </ul>
            <div class="formulargroup input-group  <% if (errors.kundennummer !== undefined) print('has-error') %>">
                <span class="input-group-addon" id="basic-addon1">Kundennr.</span>
                <input id="kundennummer" type="text" class="form-control" placeholder="Kundennummer, sofern bekannt" aria-describedby="basic-addon1" value="<%=kundennummer%>">
            </div>
            <% if (errors.kundennummer !== undefined) { %>
                <span id="kundennummerError" class="col-xs-8 col-xs-offset-5 grenznachweiserrortext"><%= errors.kundennummer %></span>
            <% } %>
            <div class="formulargroup input-group  <% if (errors.kundenname !== undefined) print('has-error') %>">
                <span class="input-group-addon" id="basic-addon1">Name*</span>
                <input id="kundenname" type="text" class="form-control" placeholder="Vor- und Nachname" aria-describedby="basic-addon1" value="<%=kundenname%>">
            </div>
            <% if (errors.kundenname !== undefined) { %>
                <span id="kundennameError" class="col-xs-8 col-xs-offset-5 grenznachweiserrortext"><%= errors.kundenname %></span>
            <% } %>
            <% if (kundenanrede === 'Firma') { %>
                <div class="formulargroup input-group  <% if (errors.kundenfirma !== undefined) print('has-error') %>">
                    <span class="input-group-addon grenznachweisfirma" id="basic-addon1">Firma*</span>
                    <input id="kundenfirma" type="text" class="form-control" placeholder="Firmenname" aria-describedby="basic-addon1" value="<%=kundenfirma%>">
                </div>
                <% if (errors.kundenfirma !== undefined) { %>
                    <span id="kundenfirmaError" class="col-xs-8 col-xs-offset-5 grenznachweiserrortext"><%= errors.kundenfirma %></span>
                <% } %>
            <% } %>
            <div class="formulargroup input-group  <% if (errors.kundenadresse !== undefined) print('has-error') %>">
                <span class="input-group-addon" id="basic-addon1">Adresse*</span>
                <input id="kundenadresse" type="text" class="form-control" placeholder="Stra\xDFe und Hausnummer" aria-describedby="basic-addon1" value="<%=kundenadresse%>">
            </div>
            <% if (errors.kundenadresse !== undefined) { %>
                <span id="kundenadresseError" class="col-xs-8 col-xs-offset-5 grenznachweiserrortext"><%= errors.kundenadresse %></span>
            <% } %>
            <div class="formulargroup input-group  <% if (errors.kundenort !== undefined || errors.kundenplz !== undefined) print('has-error') %>">
                <span class="input-group-addon" id="basic-addon1">PLZ*</span>
                <input style="width:70px;" id="kundenplz" type="text" class="form-control" placeholder="PLZ" aria-describedby="basic-addon1" value="<%=kundenplz%>">
                <span class="input-group-addon" id="basic-addon1">Ort*</span>
                <input id="kundenort" type="text" class="form-control" placeholder="Ort" aria-describedby="basic-addon1" value="<%=kundenort%>">
            </div>
            <% if (errors.kundenplz !== undefined) { %>
                <span id="kundenplzError" class="col-xs-8 col-xs-offset-5 grenznachweiserrortext"><%= errors.kundenplz %></span>
            <% } %>
            <% if (errors.kundenort !== undefined) { %>
                <span id="kundenortError" class="col-xs-8 col-xs-offset-5 grenznachweiserrortext"><%= errors.kundenort %></span>
            <% } %>
            <div class="formulargroup input-group  <% if (errors.kundenemail !== undefined) print('has-error') %>">
                <span class="input-group-addon" id="basic-addon1">E-Mail*</span>
                <input id="kundenemail" type="text" class="form-control" placeholder="E-Mail" aria-describedby="basic-addon1" value="<%=kundenemail%>">
            </div>
            <% if (errors.kundenemail !== undefined) { %>
                <span id="kundenemailError" class="col-xs-8 col-xs-offset-5 grenznachweiserrortext"><%= errors.kundenemail %></span>
            <% } %>
            <div class="formulargroup input-group  <% if (errors.kundenfestnetz !== undefined) print('has-error') %>">
                <span class="input-group-addon" id="basic-addon1">Festnetz</span>
                <input id="kundenfestnetz" type="text" class="form-control" placeholder="Telefonnummer im Festnetz" aria-describedby="basic-addon1" value="<%=kundenfestnetz%>">
            </div>
            <% if (errors.kundenfestnetz !== undefined) { %>
                <span id="kundenfestnetzError" class="col-xs-8 col-xs-offset-5 grenznachweiserrortext"><%= errors.kundenfestnetz %></span>
            <% } %>
            <div class="formulargroup input-group  <% if (errors.kundenmobilfunk !== undefined) print('has-error') %>">
                <span class="input-group-addon" id="basic-addon1">Mobilfunk</span>
                <input id="kundenmobilfunk" type="text" class="form-control" placeholder="Telefonnummer im Mobilfunknetz" aria-describedby="basic-addon1" value="<%=kundenmobilfunk%>">
            </div>
            <% if (errors.kundenmobilfunk !== undefined) { %>
                <span id="kundenmobilfunkError" class="col-xs-8 col-xs-offset-5 grenznachweiserrortext"><%= errors.kundenmobilfunk %></span>
            <% } %>
            <div class="<% if (errors.nutzungsbedingungakzeptiert !== undefined || errors.gebuehrenordnungakzeptiert !== undefined) print('has-error') %>">
                <p class="formularhead2">Vertragsbestandteile:</p>
                <div class="input-group">
                    <span class="input-group-addon">
                        <input id="nutzungsbedingungen" type="checkbox" aria-label="..."<% if (nutzungsbedingungakzeptiert === true) {print (' checked')}; %>>
                    </span>
                    <p id="nutzungsbedingungentext" class="form-control">Ich akzeptiere die
                        <a target="_blank" href="https://www.hamburg.de/contentblob/6759970/0d2017e3a82656bdf87a3aa389ed2a78/data/d-nutzungsbedingungen.pdf">Nutzungsbedingungen</a>.
                    </p>
                </div><!-- /input-group -->
                <% if (errors.nutzungsbedingungakzeptiert !== undefined) { %>
                    <span id="nutzungsbedingungakzeptiertError" class="col-xs-8 col-xs-offset-5 grenznachweiserrortext"><%= errors.nutzungsbedingungakzeptiert %></span>
                <% } %>
                <div class="input-group">
                    <span class="input-group-addon">
                        <input id="gebuehrenordnung" type="checkbox" aria-label="..."<% if (gebuehrenordnungakzeptiert === true) {print (' checked')}; %>>
                    </span>
                    <p id="gebuehrenordnungtext" class="form-control">Ich nehme die
                        <a target="_blank" href="https://www.hamburg.de/contentblob/6759966/d54568c41c936759ee235cd290347619/data/d-gebuehrenordnung.pdf">Geb\xFChrenordnung</a> zur Kenntnis.
                    </p>
                </div><!-- /input-group -->
                <% if (errors.gebuehrenordnungakzeptiert !== undefined) { %>
                    <span id="gebuehrenordnungakzeptiertError" class="col-xs-8 col-xs-offset-5 grenznachweiserrortext"><%= errors.gebuehrenordnungakzeptiert %></span>
                <% } %>
            </div>
        </div>
    </div>

    <div class="panel-footer">
        <div class="btn-group btn-group-justified" role="group" aria-label="...">
            <div class="btn-group" role="group">
                <button id="zurueck" type="button" class="btn btn-default <% if (zurueckButton.enabled === false) {print (' disabled')} else {print (' enabled')}; %>"><%=zurueckButton.name%></button>
            </div>
            <div class="btn-group" role="group">
                <button id="weiter" type="button" class="btn btn-primary <% if (weiterButton.enabled === false) {print (' disabled')} else {print (' enabled')}; %>"><%=weiterButton.name%></button>
            </div>
        </div>
        <% if (errors.bestelldaten !== undefined) { %>
            <span id="bestelldatenError" class="col-xs-8 col-xs-offset-5 grenznachweiserrortext formulargroup"><%= errors.bestelldaten %></span>
        <% } %>
    </div>
</div>
`},5837:function(a,o,r){a.exports=`// extracted by mini-css-extract-plugin
module.exports = {"gridBreakpoints-xs":"0","gridBreakpoints-sm":"576px","gridBreakpoints-md":"768px","gridBreakpoints-lg":"992px","gridBreakpoints-xl":"1200px","gridBreakpoints-xxl":"1400px"};`}}]);
