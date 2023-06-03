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
<jsp:setProperty name="housePostDTO" property="file"/>
<jsp:setProperty name="housePostDTO" property="house_title"/>
<jsp:setProperty name="housePostDTO" property="house_content"/>

<%
    HousePostDAO housePostDAO = new HousePostDAO();
    int result = housePostDAO.post(housePostDTO);
%>

{"result" : "<%=result%>"}