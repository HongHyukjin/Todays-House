<%
    response.setHeader("Access-Control-Allow-Origin", "*");
%>
<%@
    page
    language="java"
    contentType="text/html; charset=UTF-8"
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
    VideoPostDAO videoPostDAO = new VideoPostDAO();
    int result = videoPostDAO.post(videoPostDTO);
   
    if(result==1){
%>
    <script>
        alert("동영상이 업로드되었습니다");
        console.log(result);
    </script>
<%
    } 
    else{
%>
        <script>
            alert("확인 후 다시 시도해주세요");
            console.log(result);
            history.back();
        </script>
<%          
    }
    
%>