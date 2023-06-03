<%
    response.setHeader("Access-Control-Allow-Origin","*");
%>


<%@
    page
    language="java"
    contentType="application/json; charset=UTF-8"
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
    int result = userDAO.signin(userDTO.getUser_email1() + "@" + userDTO.getUser_email2(), userDTO.getUser_pw());
%>



<%
    String jsonData = "{ \"result\": \"" + result + "\"" + "}";

    response.getWriter().write(jsonData);
%>