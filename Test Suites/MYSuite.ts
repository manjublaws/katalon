<?xml version="1.0" encoding="UTF-8"?>
<TestSuiteEntity>
   <description></description>
   <name>MYSuite</name>
   <tag></tag>
   <isRerun>false</isRerun>
   <mailRecipient>manjubl.aws@gmail.com;</mailRecipient>
   <numberOfRerun>0</numberOfRerun>
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
         <combinationType>MANY</combinationType>
         <id>dcc889d1-146b-4550-a689-1e2569d647c7</id>
         <iterationEntity>
            <iterationType>ALL</iterationType>
            <value></value>
         </iterationEntity>
         <testDataId>Data Files/MSSData</testDataId>
      </testDataLink>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
      <variableLink>
         <testDataLinkId>dcc889d1-146b-4550-a689-1e2569d647c7</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>URL</value>
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
      <guid>fb51d6b4-7a9a-43c7-b45d-b281175757ea</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/IQVIA_MSS/Issue navigator</testCaseId>
      <testDataLink>
         <combinationType>ONE</combinationType>
         <id>b747f92e-10c6-4b88-a75b-9d0a3c92d9d0</id>
         <iterationEntity>
            <iterationType>ALL</iterationType>
            <value></value>
         </iterationEntity>
         <testDataId>Data Files/MSSData</testDataId>
      </testDataLink>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
      <variableLink>
         <testDataLinkId>b747f92e-10c6-4b88-a75b-9d0a3c92d9d0</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>Protocol</value>
         <variableId>3e30d21d-9da6-45d4-8fac-097aaac7dcbe</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>b747f92e-10c6-4b88-a75b-9d0a3c92d9d0</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>MSS</value>
         <variableId>7fb2b483-4f7d-474d-997e-8a1486550c29</variableId>
      </variableLink>
   </testCaseLink>
   <testCaseLink>
      <guid>579ded52-1f0c-405c-855d-951ab622ea07</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/IQVIA_MSS/LogOut</testCaseId>
      <testDataLink>
         <combinationType>ONE</combinationType>
         <id>9b4694a1-be5e-4ced-bf6e-a1007a83ceb8</id>
         <iterationEntity>
            <iterationType>ALL</iterationType>
            <value></value>
         </iterationEntity>
         <testDataId>Data Files/MSSData</testDataId>
      </testDataLink>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
      <variableLink>
         <testDataLinkId>9b4694a1-be5e-4ced-bf6e-a1007a83ceb8</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>ForgotText</value>
         <variableId>21b9c449-2638-43c0-97d4-802e9876ab4f</variableId>
      </variableLink>
   </testCaseLink>
</TestSuiteEntity>
