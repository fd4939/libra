
<a name="SCRIPT"></a>

# Script `create_parent_vasp_account.move`

### Table of Contents

-  [Function `create_parent_vasp_account`](#SCRIPT_create_parent_vasp_account)
    -  [Summary](#SCRIPT_@Summary)
    -  [Technical Description](#SCRIPT_@Technical_Description)
    -  [Parameters](#SCRIPT_@Parameters)
    -  [Common Abort Conditions](#SCRIPT_@Common_Abort_Conditions)
    -  [Related Scripts](#SCRIPT_@Related_Scripts)



<a name="SCRIPT_create_parent_vasp_account"></a>

## Function `create_parent_vasp_account`


<a name="SCRIPT_@Summary"></a>

### Summary

Creates a Parent VASP account with the specified human name. Must be called by the Treasury Compliance account.


<a name="SCRIPT_@Technical_Description"></a>

### Technical Description

Creates an account with the Parent VASP role at <code>address</code> with authentication key
<code>auth_key_prefix</code> | <code>new_account_address</code> and a 0 balance of type <code>CoinType</code>. If
<code>add_all_currencies</code> is true, 0 balances for all available currencies in the system will
also be added. This can only be invoked by an TreasuryCompliance account.
<code>sliding_nonce</code> is a unique nonce for operation, see <code><a href="../../modules/doc/SlidingNonce.md#0x1_SlidingNonce">SlidingNonce</a></code> for details.


<a name="SCRIPT_@Parameters"></a>

### Parameters

| Name                  | Type         | Description                                                                                                                                                    |
| ------                | ------       | -------------                                                                                                                                                  |
| <code>CoinType</code>            | Type         | The Move type for the <code>CoinType</code> currency that the Parent VASP account should be initialized with. <code>CoinType</code> must be an already-registered currency on-chain. |
| <code>tc_account</code>          | <code>&signer</code>    | The signer reference of the sending account of this transaction. Must be the Treasury Compliance account.                                                      |
| <code>sliding_nonce</code>       | <code>u64</code>        | The <code>sliding_nonce</code> (see: <code><a href="../../modules/doc/SlidingNonce.md#0x1_SlidingNonce">SlidingNonce</a></code>) to be used for this transaction.                                                                                     |
| <code>new_account_address</code> | <code>address</code>    | Address of the to-be-created Parent VASP account.                                                                                                              |
| <code>auth_key_prefix</code>     | <code>vector&lt;u8&gt;</code> | The authentication key prefix that will be used initially for the newly created account.                                                                       |
| <code>human_name</code>          | <code>vector&lt;u8&gt;</code> | ASCII-encoded human name for the Parent VASP.                                                                                                                  |
| <code>add_all_currencies</code>  | <code>bool</code>       | Whether to publish balance resources for all known currencies when the account is created.                                                                     |


<a name="SCRIPT_@Common_Abort_Conditions"></a>

### Common Abort Conditions

| Error Category              | Error Reason                            | Description                                                                                |
| ----------------            | --------------                          | -------------                                                                              |
| <code><a href="../../modules/doc/Errors.md#0x1_Errors_INVALID_ARGUMENT">Errors::INVALID_ARGUMENT</a></code>  | <code><a href="../../modules/doc/SlidingNonce.md#0x1_SlidingNonce_ENONCE_TOO_OLD">SlidingNonce::ENONCE_TOO_OLD</a></code>          | The <code>sliding_nonce</code> is too old and it's impossible to determine if it's duplicated or not. |
| <code><a href="../../modules/doc/Errors.md#0x1_Errors_INVALID_ARGUMENT">Errors::INVALID_ARGUMENT</a></code>  | <code><a href="../../modules/doc/SlidingNonce.md#0x1_SlidingNonce_ENONCE_TOO_NEW">SlidingNonce::ENONCE_TOO_NEW</a></code>          | The <code>sliding_nonce</code> is too far in the future.                                              |
| <code><a href="../../modules/doc/Errors.md#0x1_Errors_INVALID_ARGUMENT">Errors::INVALID_ARGUMENT</a></code>  | <code><a href="../../modules/doc/SlidingNonce.md#0x1_SlidingNonce_ENONCE_ALREADY_RECORDED">SlidingNonce::ENONCE_ALREADY_RECORDED</a></code> | The <code>sliding_nonce</code> has been previously recorded.                                          |
| <code><a href="../../modules/doc/Errors.md#0x1_Errors_REQUIRES_ADDRESS">Errors::REQUIRES_ADDRESS</a></code>  | <code><a href="../../modules/doc/CoreAddresses.md#0x1_CoreAddresses_ETREASURY_COMPLIANCE">CoreAddresses::ETREASURY_COMPLIANCE</a></code>   | The sending account is the Treasury Compliance account.                                    |
| <code><a href="../../modules/doc/Errors.md#0x1_Errors_NOT_PUBLISHED">Errors::NOT_PUBLISHED</a></code>     | <code><a href="../../modules/doc/Libra.md#0x1_Libra_ECURRENCY_INFO">Libra::ECURRENCY_INFO</a></code>                 | The <code>CoinType</code> is not a registered currency on-chain.                                      |
| <code><a href="../../modules/doc/Errors.md#0x1_Errors_ALREADY_PUBLISHED">Errors::ALREADY_PUBLISHED</a></code> | <code><a href="../../modules/doc/Roles.md#0x1_Roles_EROLE_ID">Roles::EROLE_ID</a></code>                       | The <code>new_account_address</code> address is already taken.                                        |


<a name="SCRIPT_@Related_Scripts"></a>

### Related Scripts

* <code>Script::create_child_vasp_account</code>
* <code>Script::add_currency</code>
* <code>Script::rotate_authentication_key</code>
* <code>Script::add_recovery_rotation_capability</code>
* <code>Script::create_recovery_address</code>
* <code>Script::rotate_dual_attestation_info</code>


<pre><code><b>public</b> <b>fun</b> <a href="#SCRIPT_create_parent_vasp_account">create_parent_vasp_account</a>&lt;CoinType&gt;(tc_account: &signer, sliding_nonce: u64, new_account_address: address, auth_key_prefix: vector&lt;u8&gt;, human_name: vector&lt;u8&gt;, add_all_currencies: bool)
</code></pre>



<details>
<summary>Implementation</summary>


<pre><code><b>fun</b> <a href="#SCRIPT_create_parent_vasp_account">create_parent_vasp_account</a>&lt;CoinType&gt;(
    tc_account: &signer,
    sliding_nonce: u64,
    new_account_address: address,
    auth_key_prefix: vector&lt;u8&gt;,
    human_name: vector&lt;u8&gt;,
    add_all_currencies: bool
) {
    <a href="../../modules/doc/SlidingNonce.md#0x1_SlidingNonce_record_nonce_or_abort">SlidingNonce::record_nonce_or_abort</a>(tc_account, sliding_nonce);
    <a href="../../modules/doc/LibraAccount.md#0x1_LibraAccount_create_parent_vasp_account">LibraAccount::create_parent_vasp_account</a>&lt;CoinType&gt;(
        tc_account,
        new_account_address,
        auth_key_prefix,
        human_name,
        add_all_currencies
    );
}
</code></pre>



</details>
