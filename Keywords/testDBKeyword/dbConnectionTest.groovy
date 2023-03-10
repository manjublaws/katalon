package testDBKeyword


import com.kms.katalon.core.annotation.Keyword
import internal.GlobalVariable
import oracle.jdbc.*
import java.sql.Connection
import java.sql.DriverManager
import java.sql.ResultSet


import java.sql.Statement


public class dbConnectionTest {
	Connection connection = null;
	@Keyword
	def connectDB() {
		String conn= "jdbc:oracle:thin:@moruodb137vd.quintiles.net:1521:GDMDRO1Q"
		if(connection != null &&  !Connection.isClosed()){
			connection.closed()
		}
		connection= DriverManager.getConnection(conn,"GDMPMDR_OL","GDMP_LO_2345")
	}
	@Keyword

	def executeQuery(String queryString) {

		Statement stm = connection.createStatement()

		ResultSet rs = stm.executeQuery(queryString)

		return rs
	}

	//Closing the connection

	@Keyword

	def closeDatabaseConnection() {

		if(connection != null && !connection.isClosed()){

			connection.close()

		}

		connection = null

	}

}

