<%-- The following 4 lines are ASP.NET directives needed when using SharePoint components --%>

<%@ Page Inherits="Microsoft.SharePoint.WebPartPages.WebPartPage, Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" MasterPageFile="~masterurl/default.master" Language="C#" %>

<%-- The markup and script in the following Content element will be placed in the <head> of the page --%>
<asp:Content ContentPlaceHolderID="PlaceHolderAdditionalPageHead" runat="server">
    <script type="text/javascript" src="../Scripts/jquery-1.9.1.min.js"></script>
    <script type="text/javascript" src="/_layouts/15/sp.runtime.js"></script>
    <script type="text/javascript" src="/_layouts/15/sp.js"></script>
    <meta name="WebPartPageExpansion" content="full"/>

    <!-- Add your CSS styles to the following file -->
    <link rel="Stylesheet" type="text/css" href="../Content/App.css"/>
    <script src="../Scripts/angular.min.js" type="text/javascript"></script>
    <%--<script src="../Scripts/angular-route.min.js" type="text/javascript"></script>--%>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/angular-ui-router/0.2.18/angular-ui-router.min.js" type="text/javascript"></script>
    <script src="../Scripts/angular-sanitize.js" type="text/javascript"></script>
    <script src="../Scripts/peopleApp/app.js" type="text/javascript"></script>
    <script src="../Scripts/peopleApp/services/baseSvc.js" type="text/javascript"></script>
    <script src="../Scripts/peopleApp/services/people/people.js" type="text/javascript"></script>
    <script src="../Scripts/peopleApp/controllers/people/all.js" type="text/javascript"></script>
    <script src="../Scripts/peopleApp/controllers/people/add.js" type="text/javascript"></script>
    <script src="../Scripts/peopleApp/controllers/people/edit.js" type="text/javascript"></script>
    <script src="../Scripts/peopleApp/controllers/GratisList/CreateList.js" type="text/javascript"></script>
    <script src="../Scripts/peopleApp/controllers/GratisList/editListCtrl.js"></script>
    <!-- Add your JavaScript to the following file -->
    <script type="text/javascript" src="../Scripts/App.js"></script>
</asp:Content>

<%-- The markup in the following Content element will be placed in the TitleArea of the page --%>
<asp:Content ContentPlaceHolderID="PlaceHolderPageTitleInTitleArea" runat="server">
    Page Title
</asp:Content>

<%-- The markup and script in the following Content element will be placed in the <body> of the page --%>
<asp:Content ContentPlaceHolderID="PlaceHolderMain" runat="server">
    <div ng-app="peopleApp">
        <div ui-view>
        </div>
    </div>

</asp:Content>