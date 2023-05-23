<%
    response.setHeader("Access-Control-Allow-Origin","*");
%>

<%@ 
    page 
    language="java" 
    contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"
%>

<%@ page import = "ohouse.UserDAO" %>

<% 
    request.setCharacterEncoding("UTF-8");     
%>

<%
    String user_email1 =  request.getParameter("user_email1");
    String user_email2 =  request.getParameter("user_email2");
    String user_pw =      request.getParameter("user_pw");
    String user_nick =    request.getParameter("user_nick");
    String user_service = request.getParameter("user_service");
%>

{"이메일":"<%=user_email1%>", "이메일도메인":"<%=user_email2%>", "비밀번호":"<%=user_pw%>", "닉네임":"<%=user_nick%>","약관동의":"<%=user_service%>"}