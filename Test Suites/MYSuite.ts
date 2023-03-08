<?xml version="1.0" encoding="UTF-8"?>
<TestSuiteEntity>
   <description></description>
   <name>MYSuite</name>
   <tag></tag>
   <isRerun>false</isRerun>
   <mailRecipient></mailRecipient>
   <numberOfRerun>3</numberOfRerun>
   <pageLoadTimeout>30</pageLoadTimeout>
   <pageLoadTimeoutDefault>true</pageLoadTimeoutDefault>
   <rerunFailedTestCasesOnly>false</rerunFailedTestCasesOnly>
   <rerunImmediately>true</rerunImmediately>
   <testSuiteGuid>d5854689-13eb-44fd-9feb-d36abe553ba8</testSuiteGuid>
   <testCaseLink>
      <guid>eaf8136b-76e9-4e7b-b23e-7c4c1497ad2e</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/IQVIA_MSS/Login</testCaseId>
      <testDataLink>
         <combinationType>ONE</combinationType>
         <id>dcc889d1-146b-4550-a689-1e2569d647c7</id>
         <iterationEntity>
            <iterationType>ALL</iterationType>
            <value></value>
         </iterationEntity>
         <testDataId>Data Files/MSSData</testDataId>
      </testDataLink>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
      <variableLink>
         <testDataLinkId></testDataLinkId>
         <type>DEFAULT</type>
         <value></value>
         <variableId>da95805f-f448-4817-b9a6-472dcb169f1f</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>dcc889d1-146b-4550-a689-1e2569d647c7</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>UserName</value>
         <variableId>3d8ea049-0864-40a0-8484-b5cd0fc68908</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>dcc889d1-146b-4550-a689-1e2569d647c7</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>Password</value>
         <variableId>9ef0ad54-6ded-4bb6-b422-d8e97f1f34b4</variableId>
      </variableLink>
   </testCaseLink>
   <testCaseLink>
      <guid>2e4d0337-fb13-4774-be8e-08bf84d104bc</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/IQVIA_MSS/LogOut</testCaseId>
      <testDataLink>
         <combinationType>ONE</combinationType>
         <id>6ebcfaab-0910-47ec-9bc2-7e382de8df0f</id>
         <iterationEntity>
            <iterationType>ALL</iterationType>
            <value></value>
         </iterationEntity>
         <testDataId>Data Files/MSSData</testDataId>
      </testDataLink>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
      <variableLink>
         <testDataLinkId>6ebcfaab-0910-47ec-9bc2-7e382de8df0f</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>ForgotText</value>
         <variableId>21b9c449-2638-43c0-97d4-802e9876ab4f</variableId>
      </variableLink>
   </testCaseLink>
</TestSuiteEntity>
