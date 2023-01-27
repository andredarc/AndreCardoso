Declare @nasc datetime 
Declare @atualdatetime datetime  
Declare @anos varchar(4)  
set @nasc as varchar(11)='17/04/2008' 
set @atualdatetime  = getdate()
select @anos = datediff(year,@nasc,@atualdatetime)  
select @anos   + ' anos,' as anos  

