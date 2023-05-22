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

<jsp:setProperty name="userDTO" property="user_nick" />
<jsp:setProperty name="userDTO" property="user_url" />
<jsp:setProperty name="userDTO" property="user_gender" />
<jsp:setProperty name="userDTO" property="user_birth" />
<jsp:setProperty name="userDTO" property="user_oneline" />
<jsp:setProperty name="userDTO" property="user_email1" />
<jsp:setProperty name="userDTO" property="user_email2" />

<%
    UserDAO userDAO = new UserDAO();
    int result = userDAO.update(userDTO);
%>

{"AJAX실행 DTO & DAO 결과":"<%=result%>"}


