<%@ page
    language="java"
    contentType="application/json; charset=UTF-8"
    pageEncoding="UTF-8"
%>

<%@ page import="ohouse.UserDAO" %>
<%@ page import="ohouse.UserDTO" %>

<%
    response.setHeader("Access-Control-Allow-Origin", "*");
    request.setCharacterEncoding("UTF-8");

    String user_email = request.getParameter("user_email");

    UserDAO userDAO = new UserDAO();
    UserDTO userDTO = userDAO.getJoin(user_email);

    String jsonData = "{ \"result\": {"
            + "\"이메일\": \"" + userDTO.getUser_email1() + "\","
            + "\"이메일도메인\": \"" + userDTO.getUser_email2() + "\","
            + "\"닉네임\": \"" + userDTO.getUser_nick() + "\""
            + "} }";

    response.getWriter().write(jsonData);
%>