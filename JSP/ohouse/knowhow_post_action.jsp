<%
    response.setHeader("Access-Control-Allow-Origin", "*");
%>
<%@
    page
    language="java"
    contentType="text/html; charset=UTF-8"
    pageEncoding= "UTF-8"
%>

<%@ page import="knowhow_post.KnowHowPostDAO"%>
<% request.setCharacterEncoding("UTF-8");%>

<jsp:useBean class="knowhow_post.KnowHowPostDTO" id="knowHowPostDTO" scope="page"/>
<jsp:setProperty name="knowHowPostDTO" property="file"/>
<jsp:setProperty name="knowHowPostDTO" property="knowhow_title"/>
<jsp:setProperty name="knowHowPostDTO" property="knowhow_content"/>

<%
    KnowHowPostDAO knowHowPostDAO = new KnowHowPostDAO();
    int result = knowHowPostDAO.post(knowHowPostDTO);
    if(result==1){
%>
    <script>
        alert("노하우우가 업로드되었습니다");
    </script>
<%
    } 
    else{
%>
        <script>
            alert("확인 후 다시 시도해주세요");
            history.back();
        </script>
<%          
    }
%>