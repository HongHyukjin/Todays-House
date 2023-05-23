<%@ page
    language="java"
    contentType="text/html; charset=UTF-8"
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

    {"result" : "<%= user_email %>"}
%>