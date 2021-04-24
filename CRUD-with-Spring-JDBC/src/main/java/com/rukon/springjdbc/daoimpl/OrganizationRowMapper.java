package com.rukon.springjdbc.daoimpl;

import com.rukon.springjdbc.domain.Organization;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class OrganizationRowMapper implements RowMapper<Organization> {

    public Organization mapRow(ResultSet resultSet, int rownum) throws SQLException {
        Organization org = new Organization();
        org.setId(resultSet.getInt("id"));
        org.setCompanyName(resultSet.getString("company_name"));
        org.setYearOfIncorporation(resultSet.getInt("year_of_incorporation"));
        org.setPostalCode(resultSet.getInt("postal_code"));
        org.setEmployeeCount(resultSet.getInt("employee_count"));
        org.setSlogan(resultSet.getString("slogan"));

        return org;
    }
}
