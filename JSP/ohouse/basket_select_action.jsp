<%
    response.setHeader("Access-Control-Allow-Origin", "*");
%>
<%@
    page
    language="java"
    contentType="application/json; charset=UTF-8"
    pageEncoding= "UTF-8"
%>
<%@ page import="basket.BasketPostDAO"%>
<%@ page import="basket.BasketPostDTO"%>
<%@ page import="java.util.*"%>

<% request.setCharacterEncoding("UTF-8");%>


<%
    String user_email = request.getParameter("user_email");
    BasketPostDAO basketPostDAO = new BasketPostDAO();
    List<BasketPostDTO> list = basketPostDAO.select(user_email);
    
    String jsonData = "{ \"result\": [";
    int cnt = 0;
    for(BasketPostDTO basketPostDTO : list){
        cnt++;
        if(cnt < list.size()){
            jsonData += "{ \"id\" : " + basketPostDTO.getId() + ","
                     +   "\"num\" : " + basketPostDTO.getNum() + ","
                     +   "\"price\" : " + basketPostDTO.getPrice() + ","
                     +   "\"sale\" : " + basketPostDTO.getSale() + ","
                     +   "\"totalprice\" : " + basketPostDTO.getTotalprice() + ","
                     +   "\"memo\" : \"" + basketPostDTO.getMemo() + "\""
                     + "},";
        }
        else{
            jsonData += "{ \"id\" : " + basketPostDTO.getId() + ","
                     +   "\"num\" : " + basketPostDTO.getNum() + ","
                     +   "\"price\" : " + basketPostDTO.getPrice() + ","
                     +   "\"sale\" : " + basketPostDTO.getSale() + ","
                     +   "\"totalprice\" : " + basketPostDTO.getTotalprice() + ","
                     +   "\"memo\" : \"" + basketPostDTO.getMemo() + "\""
                     + "}";
        }
    }
    jsonData += "]}";
    response.getWriter().write(jsonData);
%>