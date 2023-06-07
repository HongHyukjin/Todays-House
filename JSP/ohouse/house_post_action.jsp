<%
    response.setHeader("Access-Control-Allow-Origin", "*");
%>
<%@
    page
    language="java"
    contentType="text/html; charset=UTF-8"
    pageEncoding= "UTF-8"
%>

<%@ page import="house_post.HousePostDAO"%>
<% request.setCharacterEncoding("UTF-8");%>

<jsp:useBean class="house_post.HousePostDTO" id="housePostDTO" scope="page"/>
<jsp:setProperty name="housePostDTO" property="user_email"/>
<jsp:setProperty name="housePostDTO" property="file"/>
<jsp:setProperty name="housePostDTO" property="house_title"/>
<jsp:setProperty name="housePostDTO" property="house_content"/>
<jsp:setProperty name="housePostDTO" property="place"/>
<jsp:setProperty name="housePostDTO" property="pyeong"/>
<jsp:setProperty name="housePostDTO" property="category"/>
<jsp:setProperty name="housePostDTO" property="worker"/>
<jsp:setProperty name="housePostDTO" property="family"/>
<jsp:setProperty name="housePostDTO" property="area"/>
<jsp:setProperty name="housePostDTO" property="area2"/>
<jsp:setProperty name="housePostDTO" property="style"/>

<%
    HousePostDAO housePostDAO = new HousePostDAO();
    int result = housePostDAO.post(housePostDTO);
%>

{"result" : "<%=result%>"}