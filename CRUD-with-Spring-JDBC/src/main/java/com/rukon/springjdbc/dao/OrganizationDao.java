package com.rukon.springjdbc.dao;

import com.rukon.springjdbc.domain.Organization;

import javax.sql.DataSource;
import java.util.List;

public interface OrganizationDao {
    // Set the data source
    public void setDataSource(DataSource ds);

    // Create a record in the organization table
    public boolean create(Organization org);

    // Retrive a single organization
    public Organization getOrganization(Integer id);

    // Retirve all organization
    public List<Organization> getAllOrganization();

    // Delete an organization
    public boolean delete(Organization org);

    // Update an organization
    public boolean update(Organization org);

    // Clear data
    public void cleanup();
}
