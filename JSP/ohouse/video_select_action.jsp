<%
    response.setHeader("Access-Control-Allow-Origin", "*");
%>
<%@
    page
    language="java"
    contentType="text/html; charset=UTF-8"
    pageEncoding= "UTF-8"
%>
<%@
    page import="java.util.*"
%>
<%@ page import="video_post.VideoPostDAO"%>
<%@ page import="video_post.VideoPostDTO"%>


<% request.setCharacterEncoding("UTF-8");%>



<%
    VideoPostDAO videoPostDAO = new VideoPostDAO();
    ArrayList<VideoPostDTO> videolist = videoPostDAO.select();
    
%>


{"result" : }