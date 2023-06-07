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
<jsp:setProperty name="basketPostDTO" property="num"/>
<jsp:setProperty name="basketPostDTO" property="price"/>
<jsp:setProperty name="basketPostDTO" property="sale"/>
<jsp:setProperty name="basketPostDTO" property="totalprice"/>
<jsp:setProperty name="basketPostDTO" property="memo"/>

<%
    BasketPostDAO basketPostDAO = new BasketPostDAO();
    int result = basketPostDAO.post(basketPostDTO);
%>

{"result" : "<%=result%>"}
