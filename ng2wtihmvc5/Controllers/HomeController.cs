using ng2wtihmvc5.Model;
using ng2wtihmvc5.ssrs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ng2wtihmvc5.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Title = "Home Page";

            return View();
        }
        public ActionResult About()
        {
            var dt = new DataSet1.DataTable1DataTable();
            for (int i = 0; i < 10; i++)
            {
                var row = dt.NewRow();
                row.BeginEdit();
                row["firstname"] = i.ToString();
                row.EndEdit();
                dt.Rows.Add(row);
            }

            reportModel model = new Model.reportModel();
            model.dt = dt;
            return View(model);
        }
    }
}
