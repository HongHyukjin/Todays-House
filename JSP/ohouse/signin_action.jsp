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

<jsp:useBean id="userDTO" class="ohouse.UserDTO" scope="page"/>
<jsp:setProperty name="userDTO" property="user_pw" />
<jsp:setProperty name="userDTO" property="user_email1" />
<jsp:setProperty name="userDTO" property="user_email2" />


<%
    UserDAO userDAO = new UserDAO();
    int result = userDAO.signin(userDTO.getUser_email1() + "@" + userDTO.getUser_email2(), userDTO.getUser_pw());
%>


<%
    //로그인이 됨
    if(result == 1){
        session.setAttribute("user_email", userDTO.getUser_email1()+"@"+userDTO.getUser_email2());
    }   
%>

{"AJAX실행 DTO & DAO 결과":"<%=result%>"}
