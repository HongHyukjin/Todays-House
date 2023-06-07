<%
    response.setHeader("Access-Control-Allow-Origin", "*");
%>
<%@
    page
    language="java"
    contentType="application/json; charset=UTF-8"
    pageEncoding= "UTF-8"
%>
<%@ page import="knowhow_post.KnowHowPostDAO"%>
<%@ page import="knowhow_post.KnowHowPostDTO"%>
<%@ page import="java.util.*"%>

<% request.setCharacterEncoding("UTF-8");%>


<%
    String user_email = request.getParameter("user_email");
    KnowHowPostDAO knowHowPostDAO = new KnowHowPostDAO();
    List<KnowHowPostDTO> list = knowHowPostDAO.select(user_email);
    
    String jsonData = "{ \"result\": [";
    int cnt = 0;
    for(KnowHowPostDTO knowHowPostDTO : list){
        cnt++;
        if(cnt < list.size()){
            jsonData += "{ \"idx\" : \"" + knowHowPostDTO.getIdx() + "\","
                     +   "\"file\" : \"" + knowHowPostDTO.getFile() + "\","
                     +   "\"knowhow_title\" : \"" + knowHowPostDTO.getKnowhow_title() + "\","
                     +   "\"knowhow_content\" : \"" + knowHowPostDTO.getKnowhow_content() + "\""
                     + "},";
        }   
        else{
            jsonData += "{ \"idx\" : \"" + knowHowPostDTO.getIdx() + "\","
                     +   "\"file\" : \"" + knowHowPostDTO.getFile() + "\","
                     +   "\"knowhow_title\" : \"" + knowHowPostDTO.getKnowhow_title() + "\","
                     +   "\"knowhow_content\" : \"" + knowHowPostDTO.getKnowhow_content() + "\""
                     + "}";
        }
    }
    jsonData += "]}";
    response.getWriter().write(jsonData);
%>