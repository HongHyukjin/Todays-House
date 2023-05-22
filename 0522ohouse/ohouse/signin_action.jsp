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

<jsp:useBean id="userDTO" class="ohouse.UserDTO" scope="page"/>
<jsp:setProperty name="userDTO" property="user_pw" />
<jsp:setProperty name="userDTO" property="user_email1" />
<jsp:setProperty name="userDTO" property="user_email2" />

<%
    UserDAO userDAO = new UserDAO();
    int result = userDAO.signin(userDTO);
%>

{"AJAX실행 DTO & DAO 결과":"<%=result%>"}
