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
    String user_email = request.getParameter("user_email");
    String user_pw = request.getParameter("user_pw");
    UserDAO userDAO = new UserDAO();
    int result = userDAO.updatePw(user_email, user_pw);
%>

{"AJAX실행 DTO & DAO 결과":"<%=result%>"}


