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

<%
    ZzimPostDAO zzimPostDAO = new ZzimPostDAO();
    int result = zzimPostDAO.delete(zzimPostDTO);
%>

{"result":"<%=result%>"}