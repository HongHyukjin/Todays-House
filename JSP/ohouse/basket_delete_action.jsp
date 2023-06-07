<%
    response.setHeader("Access-Control-Allow-Origin", "*");
%>
<%@
    page
    language="java"
    contentType="text/html; charset=UTF-8"
    pageEncoding= "UTF-8"
%>
<%@ page import="basket.BasketPostDAO"%>
<% request.setCharacterEncoding("UTF-8");%>

<jsp:useBean class="basket.BasketPostDTO" id="basketPostDTO" scope="page"/>
<jsp:setProperty name="basketPostDTO" property="user_email"/>
<jsp:setProperty name="basketPostDTO" property="id"/>

<%
    BasketPostDAO basketPostDAO = new BasketPostDAO();
    int result = basketPostDAO.delete(basketPostDTO);
%>

{"result":"<%=result%>"}