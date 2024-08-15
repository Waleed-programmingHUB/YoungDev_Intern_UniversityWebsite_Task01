using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace YoungDev_Intern_UniversityWebsite_Task01.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class VisitorController : ControllerBase
    {
        [HttpGet(Name = "Coursers")]
        public void GetCourses()
        {
            // Get courses
        }

        [HttpGet(Name = "Departments")]
        public void GetDepartments()
        {
            // Get departments
        }

        [HttpGet(Name = "Faculties")]
        public void GetFaculties()
        {
            // Get faculties
        }
   
        [HttpGet(Name = "NewsAndEvents")]
        public void GetNewsAndEvents()
        {
            // Get news
        }

        [HttpGet(Name = "Contact")]
        public void GetContact()
        {
            // Get contact
        }

        [HttpGet(Name = "About")]
        public void GetAbout()
        {
            // Get about
        }

        [HttpGet(Name = "Campuses")]
        public void GetCampuses()
        {
            // Get campuses
        }

        [HttpGet(Name = "Admissions")]
        public void GetAdmissions()
        {
            // Get admissions
        }
    }
}