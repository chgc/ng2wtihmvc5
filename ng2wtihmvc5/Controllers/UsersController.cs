using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using ng2wtihmvc5.ssrs;
using ng2wtihmvc5.Model;

namespace ng2wtihmvc5.Controllers
{
    public class UsersController : Controller
    {
        // GET: Users
        public ActionResult Index()
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
            return PartialView(model);
        }
    }
}