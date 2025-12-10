
1. Select the corpus to execute the ID3 algo and click on the **SUBMIT** button.
2. To proceed further, click on the **NEXT** button.
3. Now, find the entropy of the whole dataset by entering the required values (total Yes and total No) and click on the **SUBMIT** button.
4. Repeat step 3 to find entropy for every individual attribute value.
5. Click on the **NEXT** button.
6. Now, find the information gain for the first attribute i.e., Outlook.
    <ol type="a">
    <li>Enter the required values.
    </li>
    <li>To access the value of entropy of the dataset (H(D)) and value of attribute (H(Dᵥ)), click on the tabs given on the left side.</li>
    <li>Click on the <B>SUBMIT</B> button to get the gain value.</li>
    <li>Repeat step 6 to find the information gain for the other attributes (temperature, humidity and wind).</li>
    </ol>

**NOTE:** The attribute having highest Gain value is selected as the ROOT node for the decision tree.

7. Click on the **NEXT** button to compute the tree.
8. Now, find the entropy for the 'leaf' node (which has both YES and NO examples) of the tree by entering the required values and then clicking on the **SUBMIT** button.
9. Now, find the entropy for every individual attribute value by clicking on the **ENTROPY** button.
10. Now, find the information gain for every attribute by clicking on the **IG** button.
11. Click on the **NEXT** button.
12. Repeat steps 8 to 11 until we get the final decision tree.
13. Finally, click on the **PLOT** button.