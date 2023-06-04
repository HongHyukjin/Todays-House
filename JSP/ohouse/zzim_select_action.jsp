<%
    response.setHeader("Access-Control-Allow-Origin", "*");
%>
<%@
    page
    language="java"
    contentType="application/json; charset=UTF-8"
    pageEncoding= "UTF-8"
%>
<%@ page import="zzim.ZzimPostDAO"%>
<%@ page import="zzim.ZzimPostDTO"%>
<%@ page import="java.util.*"%>

<% request.setCharacterEncoding("UTF-8");%>


<%
    String user_email = request.getParameter("user_email");
    ZzimPostDAO zzimPostDAO = new ZzimPostDAO();
    List<ZzimPostDTO> list = zzimPostDAO.select(user_email);
    
    String jsonData = "{ \"result\": [";
    int cnt = 0;
    for(ZzimPostDTO zzimPostDTO : list){
        cnt++;
        if(cnt < list.size()){
            jsonData += "{ \"id\" : \"" + zzimPostDTO.getId() + "\","
                     +   "\"imagepath\" : \"" + zzimPostDTO.getImagepath() + "\","
                     +   "\"sub\" : \"" + zzimPostDTO.getSub() + "\""
                     + "},";
        }   
        else{
            jsonData += "{ \"id\" : \"" + zzimPostDTO.getId() + "\","
                     +   "\"imagepath\" : \"" + zzimPostDTO.getImagepath() + "\","
                     +   "\"sub\" : \"" + zzimPostDTO.getSub() + "\""
                     + "}";
        }
    }
    jsonData += "]}";
    response.getWriter().write(jsonData);
%>