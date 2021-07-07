import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CKEditorComponent } from 'ng2-ckeditor';
import jsPDF from 'jspdf';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  serviceDescriptionData: Array<any> = [
    { name: 'Council Report', value: '1' },
    { name: 'Cost Plan Report', value: '2' },
    { name: 'Budget Estimation', value: '3' },
    { name: 'Expert Report', value: '4' },
    { name: 'Initial Report', value: '5' },
    { name: 'Monthly Progress Claim', value: '6' },
    { name: 'Other Service, please specify', value: '7' }
  ];
  
  isMasterSel:boolean;
  name = 'ng2-ckeditor';
  ckeConfig!: CKEDITOR.config;
  termsCondition: string;
  aboutCC: string;
  acceptanceByPrincipal: string;
  serviceDescription: string;
  councilReport: string;
  costPlanReport: string;
  budgetEstimation: string;
  expertReport: string;
  initialReport: string;
  monthlyProgressClaim: string;
  otherSpecify: string;
  log: string = '';
  editor: any;
  checkedserviceDescriptionData: any;
  @ViewChild("tcCkEditor") tcCkEditor!: CKEditorComponent;
  @ViewChild("pCkEditor") pCkEditor!: CKEditorComponent;
  @ViewChild("abpCkEditor") abpCkEditor!: CKEditorComponent;
  @ViewChild("sdCkEditor") sdCkEditor!: CKEditorComponent;

  @ViewChild('content') content!:ElementRef;  

  constructor() {
    this.isMasterSel = false;
    this.termsCondition = `<p><strong>Terms and Conditions</strong></p><p>Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users and others who access or use the Service.</p><p>By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service.</p><p><strong>Purchases</strong></p><p>If you wish to purchase any product or service made available through the Service (&quot;Purchase&quot;), you may be asked to supply certain information relevant to your Purchase including, without limitation, your &hellip;</p><p>The Purchases section is for businesses that sell online (physical or digital). For the full disclosure section, create your own Terms and Conditions.</p><p><strong>Subscriptions</strong></p><p>Some parts of the Service are billed on a subscription basis (&quot;Subscription(s)&quot;). You will be billed in advance on a recurring ...</p><p><strong>Contact Us</strong></p><p>If you have any questions about these Terms, please contact us.</p>`;

    this.aboutCC = `<div id="Panes"><div><p><strong>What is Lorem Ipsum?</strong></p><p><strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p></div>&nbsp;<div>&nbsp;</div><div><table style="width:100%"><tbody><tr><td rowspan="2"><input name="amount" size="3" type="text" value="5" /></td><td rowspan="2"><table style="text-align:left"><tbody><tr><td style="width:20px"><input checked="checked" name="what" type="radio" value="paras" /></td><td>paragraphs</td></tr><tr><td style="width:20px"><input name="what" type="radio" value="words" /></td><td>words</td></tr><tr><td style="width:20px"><input name="what" type="radio" value="bytes" /></td><td>bytes</td></tr><tr><td style="width:20px"><input name="what" type="radio" value="lists" /></td><td>lists</td></tr></tbody></table></td><td style="width:20px"><input checked="checked" name="start" type="checkbox" value="yes" /></td><td style="text-align:left">Start with &#39;Lorem<br />ipsum dolor sit amet...&#39;</td></tr><tr><td style="width:20px"><input name="start" type="checkbox" value="yes" /></td><td style="text-align:left">End with &#39;Lorem<br />ipsum dolor sit amet...&#39;</td></tr></tbody></table></div></div>`;

    this.acceptanceByPrincipal = `<div class="fsize16"><p style="text-align:right">&nbsp;</p><p style="text-align:justify">In continuation to the <span style="color:#800080"><strong>SB Order ____________ dated _______________</strong></span>, the undersigned is directed to inform that ________________,_________________, (Dept. of Revenue, CBDT) vide <span style="color:#800080">Notification dated _____________ issued vide GSR 175(E)</span>, has inserted the following sub rule in Rule 114E of Income Tax Rules, 1962.</p><p style="text-align:justify"><em>&mdash;(5A) For the purposes of pre-filling the return of income, a statement of financial transaction under subsection (1) of section 285BA of the Act containing information relating to capital gains on transfer of listedsecurities or units of Mutual Funds, dividend income, and interest income mentioned in column (2) of Table below shall be furnished by the persons mentioned in column (3) of the said Table in such form, at such frequency, and in such manner, as may be specified by the Principal Director General of Income Tax (Systems) or the Director General of Income Tax (Systems), as the case may be, with the approval of the Board, namely:&mdash;</em></p><table style="height:664px; width:515px"><tbody><tr><td>SI.<br />No.</td><td>Nature of Transaction</td><td>Class of person (reporting person)</td></tr><tr><td>I.</td><td><em>Capital gains on transfer of listed securities or units of Mutual Funds</em></td><td><em>(i) </em><em>Recognised Stock Exchange;</em><p>&nbsp;</p><p><em>(ii)&nbsp; </em><em>depository as defined in clause (e) of sub-section (1) of section 2 of the Depositories Act, 1996 (22 of 1996);</em></p><p><em>(i)&nbsp;&nbsp; </em><em>Recognised Clearing Corporation;</em></p><p><em>(ii)&nbsp; </em><em>Registrar to an issue and share transfer agent registered under subsection (1) section 12 of the Securities and Exchange Board of India Act, 1992 (15 of 1992).</em></p></td></tr><tr><td>2.</td><td><em>Dividend income</em></td><td><em>A Company</em></td></tr><tr><td><em>0.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </em><em>&nbsp;</em></td><td><em>Interest income</em></td><td><em>(i)&nbsp;&nbsp; </em><em>A  company or a co-operative bank to which the Banking Regulation Act, 1949 (10 of 1949) applies (including any bank or banking institution referred to in section 51 of that Act);</em><p>&nbsp;</p><p><strong><em>(ii) </em></strong><strong><em>Post Master General as referred to in clause </em></strong><strong><em>U) </em></strong><strong><em>of section 2 of the Indian Post Office Act, 1898 (6 of 1898).</em></strong></p><p><em>(iii) </em><em>Non-banking financial company which holds a certificate of registration under section 45-IA of the Reserve Bank of India Act,1934 (2 of 1934), to hold or accept deposit from public.</em></p></td></tr></tbody></table><p style="text-align:justify">2. Accordingly, for the purpose of pre-filling of return income, CBDT, Directorate of Income Tax (Systems) vide <span style="color:#800080">notification No. 2 of 2021 dated 20.04.2021</span> has issued format, procedure and guidelines for submission of Statement of Financial Transactions (SFT) for Interest Income.</p><p style="text-align:justify">3. Copies of the <strong><span style="color:#800080">GSR No. 175(E) dated 12.03.2021</span> </strong>and CBDT Notification No. 2 of 2021 dated 20.04.2021 are enclosed for reference.</p><p style="text-align:justify">4. Statements of Financial Transactions (SFT) in respect of following Transactions are currently being submitted by Circles / Regions.</p><p style="text-align:justify">i) Cash deposits aggregating to ten lakh rupees or more in a financial year, in one or more savings account of a person</p><p style="text-align:justify">ii) One or more accounts having fixed maturity period (other than a time deposit made through renewal of another time deposit) of a person aggregating to ten lakh rupees or <em>more </em>in a financial year of a person.</p><p style="text-align:justify">5. In addition to the above SFTs, Circles / Regions will process the submission of SFT for Interest Income also at Circle / Region Level.</p><p style="text-align:justify">6. Circle-wise data in connection with the submission of SFTs in respect of transactions in CBS Post Offices shall be forwarded to Circles by CEPT, Chennai.</p><p style="text-align:justify">7. Sanchay Post Help Desk Team will arrange to provide a tool for extracting the data in respect of the transactions in non-CBS post offices where Sanchay Post is available.</p><p style="text-align:justify">8. It is requested to take immediate necessary action in this regard.</p><p style="text-align:justify">9. This is issued with the approval of the Competent Authority.</p><p style="text-align:justify">&nbsp;</p><p style="text-align:justify"><strong><u>Format, Procedure and Guidelines for submission of Statement of Financial Transactions&nbsp; (SFT) for Interest income </u></strong></p><p style="text-align:justify">Section 285BA of the Income Tax Act, 1961 and Rule 114E requires specified reporting persons to furnish statement of financial transaction (SFT).</p><p style="text-align:justify">2. For the purposes of pre-filling the return of income, CBDT has issued Notification No. 16/2021 dated 12.03.2021 to include reporting of information relating to interest income. The new sub rule 5A of rule 114E specifies that the information shall be furnished in such form, at such frequency, and in such manner, as may be specified by the Director General of Income Tax (Systems), with the approval of the Board.</p><p style="text-align:justify">3. The guidelines for preparation and submission of Statement of Financial Transactions (SFT) information are enclosed in <strong>Annexure A </strong>and <strong>Annexure B </strong> The data structure and validation rules are enclosed in <strong>Annexure C </strong>and <strong>Annexure D </strong>respectively. Notification No. 3 of 2018 Dated 5.04.2018 may be referred for the procedure for registration.</p><p style="text-align:justify">4. Reporting entities are required to prepare the data file in prescribed format from their internal system. An excel based report preparation utility has also been provided to assist small reporting entities in preparing data file. The data files prepared by internal system/report preparation utility should be validated using Text File Validator/Submission Utility. After validation, the text file is required to be compressed, encrypted and signed using the Text File Submission Utility before uploading on the reporting portal (https://report.insight.gov.in/). Reporting entities, having large number of data files, can also submit the data files using SFTP Server (specific request may be made for SFTP upload).</p><p style="text-align:justify">5. The statement of financial transactions shall be furnished on or before the 31&prime; May, immediately following the financial year in which the transaction is registered or recorded.</p><p style="text-align:justify">6. The statement of financial transaction shall be signed, verified and furnished by the specified Designated Director. Where the reporting person is a non-resident, the statement may be signed, verified and furnished by a person who holds a valid power of attorney from such Designated Director. The data files are required to be uploaded at the reporting portal through the login credentials (PAN and password) of the designated director.</p><p style="text-align:justify">7. The reporting entities are advised to provide information of interest income, reported to Income Tax Department, to the account holder (in the form of Interest Certificate either</p><table><tbody><tr><td>Transaction Code</td><td>SFT- 016</td></tr><tr><td>Transaction<br />Description</td><td>Interest Income</td></tr><tr><td>Nature and value of transaction</td><td>Interest paid/credited during the financial .</td></tr><tr><td>Class&nbsp;&nbsp;&nbsp;&nbsp; of&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; person<p>&nbsp;</p><p>required to furnish</p></td><td>(i)&nbsp;&nbsp;&nbsp;&nbsp; A banking company or a co-operative bank to which the Banking Regulation Act, 1949 (10 of 1949) applies (including any bank or banking institution referred to in section 51 of that Act);<p>&nbsp;</p><p>(ii)&nbsp;&nbsp;&nbsp; Post Master General as referred to in clause (j) of section 2 of the Indian Post Office Act, 1898 (6 of 1898).</p><p>(iii)&nbsp;&nbsp; Non-banking financial company which holds a certificate of registration under section 45-IA of the Reserve Bank of India Act, 1934 (2 of 1934), to hold or accept deposit from public.</p></td></tr><tr><td>Remarks</td><td>1.&nbsp;&nbsp;&nbsp;&nbsp; The information is to be reported for all account/deposit holders where cumulative interest exceeds Rs 5,000/- per person in the financial year.<p>&nbsp;</p><p>2.&nbsp;&nbsp;&nbsp;&nbsp; Interest which is exempt from tax under the Income-tax Act, 1961 such as interest on Public Provident Fund (PPF) Account,</p><p>Foreign&nbsp; Currency&nbsp;&nbsp; Non-resident&nbsp;&nbsp; (FCNR)&nbsp;&nbsp; Account,&nbsp;&nbsp; Sukanya<br />Samriddhi Account, Resident Foreign Currency Account etc. need not be reported.</p><p>3.&nbsp;&nbsp;&nbsp;&nbsp; While reporting the interest amount, deduction of Rs. 10,000/-available under section 80TTA should not be reduced from interest amount paid/credited.</p><p>4.&nbsp;&nbsp;&nbsp;&nbsp; In case of joint account, the interest paid/credited should be</p><p>assigned to the first/primary account&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; holder or specified<br /> assigned person as per Form 37BA.</p><p>5.&nbsp;&nbsp;&nbsp;&nbsp; In case of minor being the account holder, the information to be reported in the name of Legal Guardian.</p><p>6.&nbsp;&nbsp;&nbsp;&nbsp; Separate report is required to be submitted for each account type (i.e. S-Savings, T-Time Deposit, R-Recurring Deposit, 0-Others) and Interest on same account type is required to be aggregated in the report.</p><p>7.&nbsp;&nbsp;&nbsp;&nbsp; Interest will be the total amount of Interest paid/credited during the financial year.</p></td></tr></tbody></table><p style="text-align:right"><br />&nbsp;</p></div>`;

    this.serviceDescription = ``;

    this.councilReport = `<div id="Panes"><div><p><strong>Council Report</p></strong><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et pain magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolorupt in reprehenderit in volute velit esse cillum pain eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p><p><strong>Council Report Evaluation</p></strong><p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium painmque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui painm ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et pain magnam aliquam quaerat voluptatem. Ut enim ad minima veniam , quis nostrum exercitationem ullam corporis elicipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur,vel illum qui painm eum fugiat quo voluptas nulla pariatur? </p><p><strong>Council Report Benefits</p></strong><p><except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure? "</p><p><strong>Section 1</p></strong><p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, simileque sunt in culpa qui officia deserunt mollitia animi, id est laborum et doloridum escape. rerum facilis est et expedita distinctio Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus even saepe ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. "</p><p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted.The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains. "</p><ol><li>Tu vero, inquam, ducas licet, si sequetur;</li><li>An potest, inquit ille, quicquam esse suavius quam nihil dolere?</li><li>-, sed ut hoc iudicaremus, non esse in iis partem maximam positam beate aut secus vivendi.</li><li>Nunc haec primum fortasse audientis servire debemus.</li><li>Age nunc isti doceant, vel tu potius quis enim ista melius?</li><li>Sit hoc ultimum bonorum, quod nunc a me defenditur;</li></ol></div></div>`;
    this.costPlanReport = `<div id="Panes"><div><p><strong>Cost Plan Report</p></strong><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et pain magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolorupt in reprehenderit in volute velit esse cillum pain eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p><p><strong>Cost Plan Report Evaluation</p></strong><p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium painmque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui painm ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et pain magnam aliquam quaerat voluptatem. Ut enim ad minima veniam , quis nostrum exercitationem ullam corporis elicipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur,vel illum qui painm eum fugiat quo voluptas nulla pariatur? </p><p><strong>Cost Plan Report Benefits</p></strong><p><except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure? "</p><p><strong>Section 1</p></strong><p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, simileque sunt in culpa qui officia deserunt mollitia animi, id est laborum et doloridum escape. rerum facilis est et expedita distinctio Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus even saepe ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. "</p><p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted.The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains. "</p><ol><li>Tu vero, inquam, ducas licet, si sequetur;</li><li>An potest, inquit ille, quicquam esse suavius quam nihil dolere?</li><li>-, sed ut hoc iudicaremus, non esse in iis partem maximam positam beate aut secus vivendi.</li><li>Nunc haec primum fortasse audientis servire debemus.</li><li>Age nunc isti doceant, vel tu potius quis enim ista melius?</li><li>Sit hoc ultimum bonorum, quod nunc a me defenditur;</li></ol></div></div>`;
    this.budgetEstimation = `<div id="Panes"><div><p><strong>Budget Estimation</p></strong><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et pain magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolorupt in reprehenderit in volute velit esse cillum pain eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p><p><strong>Budget Estimation Evaluation</p></strong><p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium painmque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui painm ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et pain magnam aliquam quaerat voluptatem. Ut enim ad minima veniam , quis nostrum exercitationem ullam corporis elicipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur,vel illum qui painm eum fugiat quo voluptas nulla pariatur? </p><p><strong>Budget Estimation Benefits</p></strong><p><except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure? "</p><p><strong>Section 1</p></strong><p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, simileque sunt in culpa qui officia deserunt mollitia animi, id est laborum et doloridum escape. rerum facilis est et expedita distinctio Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus even saepe ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. "</p><p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted.The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains. "</p><ol><li>Tu vero, inquam, ducas licet, si sequetur;</li><li>An potest, inquit ille, quicquam esse suavius quam nihil dolere?</li><li>-, sed ut hoc iudicaremus, non esse in iis partem maximam positam beate aut secus vivendi.</li><li>Nunc haec primum fortasse audientis servire debemus.</li><li>Age nunc isti doceant, vel tu potius quis enim ista melius?</li><li>Sit hoc ultimum bonorum, quod nunc a me defenditur;</li></ol></div></div>`;
    this.expertReport = `<div id="Panes"><div><p><strong>Expert Report</p></strong><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et pain magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolorupt in reprehenderit in volute velit esse cillum pain eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p><p><strong>Expert Report Evaluation</p></strong><p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium painmque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui painm ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et pain magnam aliquam quaerat voluptatem. Ut enim ad minima veniam , quis nostrum exercitationem ullam corporis elicipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur,vel illum qui painm eum fugiat quo voluptas nulla pariatur? </p><p><strong>Expert Report Benefits</p></strong><p><except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure? "</p><p><strong>Section 1</p></strong><p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, simileque sunt in culpa qui officia deserunt mollitia animi, id est laborum et doloridum escape. rerum facilis est et expedita distinctio Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus even saepe ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. "</p><p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted.The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains. "</p><ol><li>Tu vero, inquam, ducas licet, si sequetur;</li><li>An potest, inquit ille, quicquam esse suavius quam nihil dolere?</li><li>-, sed ut hoc iudicaremus, non esse in iis partem maximam positam beate aut secus vivendi.</li><li>Nunc haec primum fortasse audientis servire debemus.</li><li>Age nunc isti doceant, vel tu potius quis enim ista melius?</li><li>Sit hoc ultimum bonorum, quod nunc a me defenditur;</li></ol></div></div>`;
    this.initialReport = `<div id="Panes"><div><p><strong>Initial Report</p></strong><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et pain magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolorupt in reprehenderit in volute velit esse cillum pain eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p><p><strong>Initial Report Evaluation</p></strong><p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium painmque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui painm ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et pain magnam aliquam quaerat voluptatem. Ut enim ad minima veniam , quis nostrum exercitationem ullam corporis elicipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur,vel illum qui painm eum fugiat quo voluptas nulla pariatur? </p><p><strong>Initial Report Benefits</p></strong><p><except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure? "</p><p><strong>Section 1</p></strong><p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, simileque sunt in culpa qui officia deserunt mollitia animi, id est laborum et doloridum escape. rerum facilis est et expedita distinctio Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus even saepe ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. "</p><p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted.The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains. "</p><ol><li>Tu vero, inquam, ducas licet, si sequetur;</li><li>An potest, inquit ille, quicquam esse suavius quam nihil dolere?</li><li>-, sed ut hoc iudicaremus, non esse in iis partem maximam positam beate aut secus vivendi.</li><li>Nunc haec primum fortasse audientis servire debemus.</li><li>Age nunc isti doceant, vel tu potius quis enim ista melius?</li><li>Sit hoc ultimum bonorum, quod nunc a me defenditur;</li></ol></div></div>`;
    this.monthlyProgressClaim = `<div id="Panes"><div><p><strong>Monthly Progress Claim</p></strong><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et pain magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolorupt in reprehenderit in volute velit esse cillum pain eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p><p><strong>Monthly Progress Claim Evaluation</p></strong><p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium painmque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui painm ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et pain magnam aliquam quaerat voluptatem. Ut enim ad minima veniam , quis nostrum exercitationem ullam corporis elicipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur,vel illum qui painm eum fugiat quo voluptas nulla pariatur? </p><p><strong>Monthly Progress Claim Benefits</p></strong><p><except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure? "</p><p><strong>Section 1</p></strong><p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, simileque sunt in culpa qui officia deserunt mollitia animi, id est laborum et doloridum escape. rerum facilis est et expedita distinctio Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus even saepe ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. "</p><p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted.The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains. "</p><ol><li>Tu vero, inquam, ducas licet, si sequetur;</li><li>An potest, inquit ille, quicquam esse suavius quam nihil dolere?</li><li>-, sed ut hoc iudicaremus, non esse in iis partem maximam positam beate aut secus vivendi.</li><li>Nunc haec primum fortasse audientis servire debemus.</li><li>Age nunc isti doceant, vel tu potius quis enim ista melius?</li><li>Sit hoc ultimum bonorum, quod nunc a me defenditur;</li></ol></div></div>`;
    this.otherSpecify = `<div id="Panes"><div><p><strong>Other Service</p></strong><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et pain magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolorupt in reprehenderit in volute velit esse cillum pain eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p><p><strong>Other Service Evaluation</p></strong><p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium painmque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui painm ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et pain magnam aliquam quaerat voluptatem. Ut enim ad minima veniam , quis nostrum exercitationem ullam corporis elicipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur,vel illum qui painm eum fugiat quo voluptas nulla pariatur? </p><p><strong>Other Service Benefits</p></strong><p><except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure? "</p><p><strong>Section 1</p></strong><p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, simileque sunt in culpa qui officia deserunt mollitia animi, id est laborum et doloridum escape. rerum facilis est et expedita distinctio Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus even saepe ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. "</p><p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted.The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains. "</p><ol><li>Tu vero, inquam, ducas licet, si sequetur;</li><li>An potest, inquit ille, quicquam esse suavius quam nihil dolere?</li><li>-, sed ut hoc iudicaremus, non esse in iis partem maximam positam beate aut secus vivendi.</li><li>Nunc haec primum fortasse audientis servire debemus.</li><li>Age nunc isti doceant, vel tu potius quis enim ista melius?</li><li>Sit hoc ultimum bonorum, quod nunc a me defenditur;</li></ol></div></div>`;

    // this.editor = CKEDITOR.instances;
    // console.log('nithin',this.editor);
    
    this.getCheckedItemList();
    
  }

  ngOnInit() {
    this.ckeConfig = {
      allowedContent: false,
      extraPlugins: 'divarea',
      forcePasteAsPlainText: true
    };
    //this.createSignature('Nithin', 'top', 'signature');
  }

  // createSignature(s: string, pos: string, id: string): any{
    
  //   CKEDITOR.plugins.add('textsignature');
  //   /* Get nodes */
  //   var doc = null, body = null, node = null;
  //   try {
  //     doc = this.editor.document.$;
  //     body = this.editor.document.getBody().$;

  //   } catch(e) { doc = body = null; }
  //   if(!doc || !body) return false;
    
    

  //   /* Signature at the bottom will be removed */
  //   if(!pos || pos == "bottom") {
  //     node = doc.getElementById(id);
  //     if(node && node.parentNode && node.parentNode.removeChild) node.parentNode.removeChild(node);
  //     node = null;
  //   }

  //   /* Get signature node */
  //   node = doc.getElementById(id);
  //   if(node) {
      
  //     /* Signature node found. Set the innerHTML or empty */
  //     var cknode = new CKEDITOR.dom.element(node);
  //     if(cknode) {
  //       cknode.setHtml(s);
  //       if(s == "") cknode.addClass(id+"-empty"); else cknode.removeClass(id+"-empty");
  //       if(body.firstChild === node) this.prependHTML(doc, body, "<br/>");
  //     }
      
  //   } else {
      
  //     /* No signature node. Create new signature node */
      
  //     /* Delete empty rows */
  //     if(!pos || pos == "bottom") var neighborFn = "previousSibling", startNodeFn = "lastChild", insertFn = "append"; else var neighborFn = "nextSibling", startNodeFn = "firstChild", insertFn = "prepend";
  //     var node = body[startNodeFn], neighbor = null, deletedBr = 0;
  //     while(node && deletedBr < 3) {
  //       neighbor = node[neighborFn];
  //       if(node.nodeType == 1 && node.nodeName && node.nodeName.toLowerCase() == "br") {
  //         body.removeChild(node);
  //         deletedBr++;
  //       }
        
    
  //       else if(this.isEmptyNode(node)) body.removeChild(node);
  //       else break;
  //       node = neighbor;
  //     }
      
  //     /* Insert signature */
  //     if(s == "") s = '<div id="'+id+'" class="'+id+'-empty"></div>'; else s = '<div id="'+id+'">'+s+'</div>';
  //     if((pos && pos == "top") || this.isEmptyNode(body)) s = "<br/>"+s;
  //     if(insertFn == "prepend") this.prependHTML(doc, body, s);
  //     else {
  //       var ckbody = new CKEDITOR.dom.element(body);
  //       if(ckbody) ckbody.appendHtml(s);
  //     }
      
  //   }

  //   /* Save Snapshot for Redo/Undo */
  //   this.editor.fire("saveSnapshot");
					
  //   return true;
  // }

  // isEmptyNode(node: any): any{
  //   if(node) {
	// 		if(node.nodeType == 3) {
	// 			var text: any = node.nodeValue;
	// 			text = text.replace(/\u200B|&#8203;|\s/g, "");
	// 			if(text.length == 0) return true;
	// 		} else {
	// 			if(node.nodeType == 1) {
	// 				if(node.nodeName && node.nodeName.toLowerCase() == "img") return false;
	// 				var cknode = new CKEDITOR.dom.element(node);
	// 				//if(cknode && cknode.find("img").length > 0) return false;
	// 			}
	// 			var text: any = "";
	// 			try { if("textContent" in node) text = String(node.textContent); else text = String(node.innerText); } catch(e) { text = ""; }
	// 			text = text.replace(/\u200B|&#8203;|\s/g, "");
	// 			if(text.length == 0) return true;
	// 		}
	// 	}
	// 	return false;
  // }

  // prependHTML(doc: any, body: any, s: string){}

  onChange($event: any): void {
    console.log("onChange",$event);
    //this.log += new Date() + "<br />";
  }

  onPaste($event: any): void {
    console.log("onPaste");
    //this.log += new Date() + "<br />";
  }  

  onServiceDescriptionChange($event: any) {
    this.getCheckedItemList();
  }

   
  checkUncheckAll() {
    for (var i = 0; i < this.serviceDescriptionData.length; i++) {
      this.serviceDescriptionData[i].isSelected = this.isMasterSel;
    }
    this.getCheckedItemList();
  }
   
  isAllSelected() {
    this.isMasterSel = this.serviceDescriptionData.every(function(item:any) {
        return item.isSelected == true;
      })
    this.getCheckedItemList();
  }
  
  getCheckedItemList(){
    this.checkedserviceDescriptionData = [];
    this.serviceDescription = '';
    for (var i = 0; i < this.serviceDescriptionData.length; i++) {
      if((this.serviceDescriptionData[i].isSelected) && (this.serviceDescriptionData[i].value==1)){
        this.serviceDescription += this.councilReport;
      }else{
        this.serviceDescription += '';
      }
      if((this.serviceDescriptionData[i].isSelected) && (this.serviceDescriptionData[i].value==2)){
        this.serviceDescription += this.costPlanReport;
      }else{
        this.serviceDescription += '';
      }
      if((this.serviceDescriptionData[i].isSelected) && (this.serviceDescriptionData[i].value==3)){
        this.serviceDescription += this.budgetEstimation;
      }else{
        this.serviceDescription += '';
      }
      if((this.serviceDescriptionData[i].isSelected) && (this.serviceDescriptionData[i].value==4)){
        this.serviceDescription += this.expertReport;
      }else{
        this.serviceDescription += '';
      }
      if((this.serviceDescriptionData[i].isSelected) && (this.serviceDescriptionData[i].value==5)){
        this.serviceDescription += this.initialReport;
      }else{
        this.serviceDescription += '';
      }
      if((this.serviceDescriptionData[i].isSelected) && (this.serviceDescriptionData[i].value==6)){
        this.serviceDescription += this.monthlyProgressClaim;
      }else{
        this.serviceDescription += '';
      }
      if((this.serviceDescriptionData[i].isSelected) && (this.serviceDescriptionData[i].value==7)){
        this.serviceDescription += this.otherSpecify;
      }else{
        this.serviceDescription += '';
      }
    }
  }

  SavePDF(): void {  
    let content = this.content.nativeElement;  
    console.log(content.innerHTML);

    let doc = new jsPDF('p', 'pt', 'a4');  
    let _elementHandlers =  
    {  
      '#editor':function(element: any, renderer: any){  
        return true;  
      }  
    };  
    doc.html(content.innerHTML, {
      callback: function (doc) {
        doc.save('enquiry.pdf');
      },
    });
  }  
}

