package model;

 
import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

//for map
import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

/**
 * Servlet implementation class PaysAPI
 */
@WebServlet("/PaysAPI")
public class PaysAPI extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
	Pay payObj = new Pay();
     
	//convert request parameters to a map
		private static Map getParasMap(HttpServletRequest request) {
			Map<String, String> map = new HashMap<String, String>();

			try {
				Scanner scanner = new Scanner(request.getInputStream(), "UTF-8");
				String queryString = scanner.hasNext() ? scanner.useDelimiter("\\A").next() : "";
				scanner.close();

				String[] params = queryString.split("&");

				for (String param : params) {
					String[] p = param.split("=");
					map.put(p[0], p[1]);
				}
			} catch (Exception e) {

			}

			return map;
		}
	       
	    /**
	     * @see HttpServlet#HttpServlet()
	     */
	
    public PaysAPI() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		//sending values to insert function
		String output =payObj.insertPay(request.getParameter("payDate"),
				 request.getParameter("name"),
				request.getParameter("email"),
				request.getParameter("amount"),
		        request.getParameter("accNo"),
		       request.getParameter("ccv"),
		        request.getParameter("expireDate"));
		
		      //sending the output to client
				response.getWriter().write(output);
		 
	}

	/**
	 * @see HttpServlet#doPut(HttpServletRequest, HttpServletResponse)
	 */
	protected void doPut(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		//parameter map
		Map paras = getParasMap(request);
		 
		//getting values from the map and sending to update function
		String output = payObj.updatePay(paras.get("hidPayIDSave").toString(),
			paras.get("payDate").toString(),
			paras.get("name").toString(),
			paras.get("email").toString(),
			paras.get("amount").toString(),
			paras.get("accNo").toString(),
			paras.get("ccv").toString(),
			paras.get("expireDate").toString());
		
		//sending the output to client
		response.getWriter().write(output);
	}

	/**
	 * @see HttpServlet#doDelete(HttpServletRequest, HttpServletResponse)
	 */
	protected void doDelete(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

		//parameter map
				Map paras = getParasMap(request);

				//getting values from the map and sending to delete function
				String output = payObj.deletePay(	paras.get("payID").toString());
				
				//sending the output to client
				response.getWriter().write(output);
	}

}
