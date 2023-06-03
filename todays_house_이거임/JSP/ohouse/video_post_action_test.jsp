<%
    response.setHeader("Access-Control-Allow-Origin", "*");
%>
<%@
    page
    language="java"
    contentType="application/json; charset=UTF-8"
    pageEncoding= "UTF-8"
%>
<%@ page import="video_post.VideoPostDAO"%>
<% request.setCharacterEncoding("UTF-8");%>

<jsp:useBean class="video_post.VideoPostDTO" id="videoPostDTO" scope="page"/>
<jsp:setProperty name="videoPostDTO" property="video_pyeong"/>
<jsp:setProperty name="videoPostDTO" property="video_type"/>
<jsp:setProperty name="videoPostDTO" property="video_style"/>
<jsp:setProperty name="videoPostDTO" property="video_file"/>
<jsp:setProperty name="videoPostDTO" property="video_place"/>
<jsp:setProperty name="videoPostDTO" property="video_memo"/>

<%  
    String jsonData = "{ \"result\": {"
    + "\"video_pyeong\": \"" + videoPostDTO.getVideo_pyeong() + "\","
    + "\"video_type\": \"" + videoPostDTO.getVideo_type() + "\","
    + "\"video_style\": \"" + videoPostDTO.getVideo_style() + "\","
    + "\"video_file\": \"" + videoPostDTO.getVideo_file() + "\","
    + "\"video_place\": \"" + videoPostDTO.getVideo_place() + "\","
    + "\"video_memo\": \"" + videoPostDTO.getVideo_memo() + "\""
    + "} }";

    response.getWriter().write(jsonData);
%>