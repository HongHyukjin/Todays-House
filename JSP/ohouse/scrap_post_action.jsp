<%
    response.setHeader("Access-Control-Allow-Origin", "*");
%>
<%@
    page
    language="java"
    contentType="text/html; charset=UTF-8"
    pageEncoding= "UTF-8"
%>
<%@ page import="scrap.ScrapPostDAO"%>
<% request.setCharacterEncoding("UTF-8");%>

<jsp:useBean class="scrap.ScrapPostDTO" id="scrapPostDTO" scope="page"/>
<jsp:setProperty name="scrapPostDTO" property="id"/>
<jsp:setProperty name="scrapPostDTO" property="imagepath"/>
<jsp:setProperty name="scrapPostDTO" property="sub"/>

<%
    ScrapPostDAO scrapPostDAO = new ScrapPostDAO();
    int result = scrapPostDAO.post(scrapPostDTO);
%>

{"result":"<%=result%>"}