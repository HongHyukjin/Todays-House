<%
    response.setHeader("Access-Control-Allow-Origin", "*");
%>
<%@
    page
    language="java"
    contentType="text/html; charset=UTF-8"
    pageEncoding= "UTF-8"
%>
<%@ page import="zzim.ZzimPostDAO"%>
<% request.setCharacterEncoding("UTF-8");%>

<jsp:useBean class="zzim.ZzimPostDTO" id="zzimPostDTO" scope="page"/>
<jsp:setProperty name="zzimPostDTO" property="user_email"/>
<jsp:setProperty name="zzimPostDTO" property="id"/>
<jsp:setProperty name="zzimPostDTO" property="imagepath"/>
<jsp:setProperty name="zzimPostDTO" property="sub"/>

<%
    ZzimPostDAO zzimPostDAO = new ZzimPostDAO();
    int result = zzimPostDAO.post(zzimPostDTO);
%>

{"result":"<%=result%>"}