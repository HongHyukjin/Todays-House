<%
    response.setHeader("Access-Control-Allow-Origin","*");
%>

<%@ 
    page 
    language="java" 
    contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"
%>

<%@ page import = "basket.BasketPostDAO" %>

<% 
    request.setCharacterEncoding("UTF-8"); 
%>

<jsp:useBean id="basketPostDTO" class="basket.BasketPostDTO" scope="page"/>

<jsp:setProperty name="basketPostDTO" property="id" />
<jsp:setProperty name="basketPostDTO" property="num" />
<jsp:setProperty name="basketPostDTO" property="totalprice" />
<jsp:setProperty name="basketPostDTO" property="user_email" />

<%
    BasketPostDAO basketPostDAO = new BasketPostDAO();
    int result = basketPostDAO.update(basketPostDTO);
%>

{"result":"<%=result%>"}


