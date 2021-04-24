package com.rukon.springjdbc.main;

import com.rukon.springjdbc.dao.OrganizationDao;
import com.rukon.springjdbc.daoimpl.OrganizationDaoImpl;
import com.rukon.springjdbc.domain.Organization;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import java.util.List;

public class JdbcTemplateClassApp1 {

    public static void main(String[] args) {

        // create the application context
        ApplicationContext ctx = new ClassPathXmlApplicationContext("beans-cp.xml");

        // Create the bean
        OrganizationDao dao = (OrganizationDaoImpl) ctx.getBean("orgDao");

        List<Organization> orgs = dao.getAllOrganization();

        for(Organization org:orgs){
            System.out.println(org);
        }

        // Close application context
        ((ClassPathXmlApplicationContext) ctx).close();

    }
}
