using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.UI;
namespace WebApiProject.Controllers
{
    public class EmployeeController : ApiController
    {
        public List<Employee> Get()
        {
            using (var dbcontext = new Angular2DemoEntities())
            {
                return dbcontext.Employees.ToList();
            }
        }
        public Employee Get(long code)
        {
            using (var dbcontext = new Angular2DemoEntities())
            {
                return dbcontext.Employees.Where(m => m.EmpCode == code).FirstOrDefault();
            }
        }

        [HttpPost]
        public List<Employee> Post([FromBody]  Employee employee)
        {
           
            //Employee employee = new Employee();
            //employee.EmpName = EmpName;
            using (var dbcontext = new Angular2DemoEntities())
            {
                dbcontext.Employees.Add(employee);
                dbcontext.SaveChanges();
                return dbcontext.Employees.ToList();
            }
        }
        public void Delete(long code)
        {
            using (var dbcontext = new Angular2DemoEntities())
            {
                var emaployee = dbcontext.Employees.Where(m => m.EmpCode == code).FirstOrDefault();
                dbcontext.Employees.Remove(emaployee);
                dbcontext.SaveChanges();
               
            }
        }

        [HttpPut]
        [ActionName("UpdateEmployee")]
        public void UpdateEmployee([FromBody]  Employee employee)
        {
            using (var dbcontext = new Angular2DemoEntities())
            {
                var currentemployee = dbcontext.Employees.Where(m => m.EmpCode == employee.EmpCode).FirstOrDefault();
                currentemployee.EmpName = employee.EmpName;
                currentemployee.Gender = employee.Gender;
                currentemployee.Salary = employee.Salary;
                currentemployee.Age = employee.Age;
                dbcontext.SaveChanges();
               
            }
        }
    }
}
