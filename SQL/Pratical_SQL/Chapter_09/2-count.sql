SELECT count(*) 
FROM pls_fy2018_libraries; 
 
SELECT count(*) 
FROM pls_fy2017_libraries; 
 
SELECT count(*) 
FROM pls_fy2016_libraries;

SELECT count(phone) 
FROM pls_fy2018_libraries;

--

SELECT count(libname) 
FROM pls_fy2018_libraries;

SELECT count(DISTINCT libname) 
FROM pls_fy2018_libraries;