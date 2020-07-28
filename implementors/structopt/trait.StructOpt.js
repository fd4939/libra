(function() {var implementors = {};
implementors["backup_cli"] = [{"text":"impl StructOpt for <a class=\"struct\" href=\"backup_cli/backup_types/epoch_ending/backup/struct.EpochEndingBackupOpt.html\" title=\"struct backup_cli::backup_types::epoch_ending::backup::EpochEndingBackupOpt\">EpochEndingBackupOpt</a>","synthetic":false,"types":["backup_cli::backup_types::epoch_ending::backup::EpochEndingBackupOpt"]},{"text":"impl StructOpt for <a class=\"struct\" href=\"backup_cli/backup_types/epoch_ending/restore/struct.EpochEndingRestoreOpt.html\" title=\"struct backup_cli::backup_types::epoch_ending::restore::EpochEndingRestoreOpt\">EpochEndingRestoreOpt</a>","synthetic":false,"types":["backup_cli::backup_types::epoch_ending::restore::EpochEndingRestoreOpt"]},{"text":"impl StructOpt for <a class=\"struct\" href=\"backup_cli/backup_types/state_snapshot/backup/struct.StateSnapshotBackupOpt.html\" title=\"struct backup_cli::backup_types::state_snapshot::backup::StateSnapshotBackupOpt\">StateSnapshotBackupOpt</a>","synthetic":false,"types":["backup_cli::backup_types::state_snapshot::backup::StateSnapshotBackupOpt"]},{"text":"impl StructOpt for <a class=\"struct\" href=\"backup_cli/backup_types/state_snapshot/restore/struct.StateSnapshotRestoreOpt.html\" title=\"struct backup_cli::backup_types::state_snapshot::restore::StateSnapshotRestoreOpt\">StateSnapshotRestoreOpt</a>","synthetic":false,"types":["backup_cli::backup_types::state_snapshot::restore::StateSnapshotRestoreOpt"]},{"text":"impl StructOpt for <a class=\"struct\" href=\"backup_cli/backup_types/transaction/backup/struct.TransactionBackupOpt.html\" title=\"struct backup_cli::backup_types::transaction::backup::TransactionBackupOpt\">TransactionBackupOpt</a>","synthetic":false,"types":["backup_cli::backup_types::transaction::backup::TransactionBackupOpt"]},{"text":"impl StructOpt for <a class=\"struct\" href=\"backup_cli/backup_types/transaction/restore/struct.TransactionRestoreOpt.html\" title=\"struct backup_cli::backup_types::transaction::restore::TransactionRestoreOpt\">TransactionRestoreOpt</a>","synthetic":false,"types":["backup_cli::backup_types::transaction::restore::TransactionRestoreOpt"]},{"text":"impl StructOpt for <a class=\"struct\" href=\"backup_cli/storage/command_adapter/struct.CommandAdapterOpt.html\" title=\"struct backup_cli::storage::command_adapter::CommandAdapterOpt\">CommandAdapterOpt</a>","synthetic":false,"types":["backup_cli::storage::command_adapter::CommandAdapterOpt"]},{"text":"impl StructOpt for <a class=\"struct\" href=\"backup_cli/storage/local_fs/struct.LocalFsOpt.html\" title=\"struct backup_cli::storage::local_fs::LocalFsOpt\">LocalFsOpt</a>","synthetic":false,"types":["backup_cli::storage::local_fs::LocalFsOpt"]},{"text":"impl StructOpt for <a class=\"enum\" href=\"backup_cli/storage/enum.StorageOpt.html\" title=\"enum backup_cli::storage::StorageOpt\">StorageOpt</a>","synthetic":false,"types":["backup_cli::storage::StorageOpt"]},{"text":"impl StructOpt for <a class=\"struct\" href=\"backup_cli/utils/backup_service_client/struct.BackupServiceClientOpt.html\" title=\"struct backup_cli::utils::backup_service_client::BackupServiceClientOpt\">BackupServiceClientOpt</a>","synthetic":false,"types":["backup_cli::utils::backup_service_client::BackupServiceClientOpt"]},{"text":"impl StructOpt for <a class=\"struct\" href=\"backup_cli/utils/struct.GlobalBackupOpt.html\" title=\"struct backup_cli::utils::GlobalBackupOpt\">GlobalBackupOpt</a>","synthetic":false,"types":["backup_cli::utils::GlobalBackupOpt"]},{"text":"impl StructOpt for <a class=\"struct\" href=\"backup_cli/utils/struct.GlobalRestoreOpt.html\" title=\"struct backup_cli::utils::GlobalRestoreOpt\">GlobalRestoreOpt</a>","synthetic":false,"types":["backup_cli::utils::GlobalRestoreOpt"]}];
implementors["cluster_test"] = [{"text":"impl StructOpt for <a class=\"struct\" href=\"cluster_test/cluster_builder/struct.ClusterBuilderParams.html\" title=\"struct cluster_test::cluster_builder::ClusterBuilderParams\">ClusterBuilderParams</a>","synthetic":false,"types":["cluster_test::cluster_builder::ClusterBuilderParams"]},{"text":"impl StructOpt for <a class=\"struct\" href=\"cluster_test/experiments/struct.CompatiblityTestParams.html\" title=\"struct cluster_test::experiments::CompatiblityTestParams\">CompatiblityTestParams</a>","synthetic":false,"types":["cluster_test::experiments::compatibility_test::CompatiblityTestParams"]},{"text":"impl StructOpt for <a class=\"struct\" href=\"cluster_test/experiments/struct.CpuFlamegraphParams.html\" title=\"struct cluster_test::experiments::CpuFlamegraphParams\">CpuFlamegraphParams</a>","synthetic":false,"types":["cluster_test::experiments::cpu_flamegraph::CpuFlamegraphParams"]},{"text":"impl StructOpt for <a class=\"struct\" href=\"cluster_test/experiments/struct.PacketLossRandomValidatorsParams.html\" title=\"struct cluster_test::experiments::PacketLossRandomValidatorsParams\">PacketLossRandomValidatorsParams</a>","synthetic":false,"types":["cluster_test::experiments::packet_loss_random_validators::PacketLossRandomValidatorsParams"]},{"text":"impl StructOpt for <a class=\"struct\" href=\"cluster_test/experiments/struct.PerformanceBenchmarkParams.html\" title=\"struct cluster_test::experiments::PerformanceBenchmarkParams\">PerformanceBenchmarkParams</a>","synthetic":false,"types":["cluster_test::experiments::performance_benchmark::PerformanceBenchmarkParams"]},{"text":"impl StructOpt for <a class=\"struct\" href=\"cluster_test/experiments/struct.PerformanceBenchmarkThreeRegionSimulationParams.html\" title=\"struct cluster_test::experiments::PerformanceBenchmarkThreeRegionSimulationParams\">PerformanceBenchmarkThreeRegionSimulationParams</a>","synthetic":false,"types":["cluster_test::experiments::performance_benchmark_three_region_simulation::PerformanceBenchmarkThreeRegionSimulationParams"]},{"text":"impl StructOpt for <a class=\"struct\" href=\"cluster_test/experiments/struct.RebootRandomValidatorsParams.html\" title=\"struct cluster_test::experiments::RebootRandomValidatorsParams\">RebootRandomValidatorsParams</a>","synthetic":false,"types":["cluster_test::experiments::reboot_random_validators::RebootRandomValidatorsParams"]},{"text":"impl StructOpt for <a class=\"struct\" href=\"cluster_test/experiments/struct.RecoveryTimeParams.html\" title=\"struct cluster_test::experiments::RecoveryTimeParams\">RecoveryTimeParams</a>","synthetic":false,"types":["cluster_test::experiments::recovery_time::RecoveryTimeParams"]},{"text":"impl StructOpt for <a class=\"struct\" href=\"cluster_test/experiments/struct.TwinValidatorsParams.html\" title=\"struct cluster_test::experiments::TwinValidatorsParams\">TwinValidatorsParams</a>","synthetic":false,"types":["cluster_test::experiments::twin_validator::TwinValidatorsParams"]},{"text":"impl StructOpt for <a class=\"struct\" href=\"cluster_test/experiments/struct.ValidatorVersioningParams.html\" title=\"struct cluster_test::experiments::ValidatorVersioningParams\">ValidatorVersioningParams</a>","synthetic":false,"types":["cluster_test::experiments::versioning_test::ValidatorVersioningParams"]}];
implementors["generate_format"] = [{"text":"impl StructOpt for <a class=\"enum\" href=\"generate_format/enum.Corpus.html\" title=\"enum generate_format::Corpus\">Corpus</a>","synthetic":false,"types":["generate_format::Corpus"]}];
implementors["libra_genesis_tool"] = [{"text":"impl StructOpt for <a class=\"enum\" href=\"libra_genesis_tool/command/enum.Command.html\" title=\"enum libra_genesis_tool::command::Command\">Command</a>","synthetic":false,"types":["libra_genesis_tool::command::Command"]}];
implementors["libra_management"] = [{"text":"impl StructOpt for <a class=\"struct\" href=\"libra_management/secure_backend/struct.ValidatorBackend.html\" title=\"struct libra_management::secure_backend::ValidatorBackend\">ValidatorBackend</a>","synthetic":false,"types":["libra_management::secure_backend::ValidatorBackend"]},{"text":"impl StructOpt for <a class=\"struct\" href=\"libra_management/secure_backend/struct.SharedBackend.html\" title=\"struct libra_management::secure_backend::SharedBackend\">SharedBackend</a>","synthetic":false,"types":["libra_management::secure_backend::SharedBackend"]},{"text":"impl StructOpt for <a class=\"struct\" href=\"libra_management/validator_config/struct.ValidatorConfig.html\" title=\"struct libra_management::validator_config::ValidatorConfig\">ValidatorConfig</a>","synthetic":false,"types":["libra_management::validator_config::ValidatorConfig"]}];
implementors["libra_operational_tool"] = [{"text":"impl StructOpt for <a class=\"enum\" href=\"libra_operational_tool/command/enum.Command.html\" title=\"enum libra_operational_tool::command::Command\">Command</a>","synthetic":false,"types":["libra_operational_tool::command::Command"]},{"text":"impl StructOpt for <a class=\"struct\" href=\"libra_operational_tool/governance/struct.AddValidator.html\" title=\"struct libra_operational_tool::governance::AddValidator\">AddValidator</a>","synthetic":false,"types":["libra_operational_tool::governance::AddValidator"]},{"text":"impl StructOpt for <a class=\"struct\" href=\"libra_operational_tool/governance/struct.RemoveValidator.html\" title=\"struct libra_operational_tool::governance::RemoveValidator\">RemoveValidator</a>","synthetic":false,"types":["libra_operational_tool::governance::RemoveValidator"]},{"text":"impl StructOpt for <a class=\"struct\" href=\"libra_operational_tool/operator_key/struct.RotateOperatorKey.html\" title=\"struct libra_operational_tool::operator_key::RotateOperatorKey\">RotateOperatorKey</a>","synthetic":false,"types":["libra_operational_tool::operator_key::RotateOperatorKey"]},{"text":"impl StructOpt for <a class=\"struct\" href=\"libra_operational_tool/validate_transaction/struct.ValidateTransaction.html\" title=\"struct libra_operational_tool::validate_transaction::ValidateTransaction\">ValidateTransaction</a>","synthetic":false,"types":["libra_operational_tool::validate_transaction::ValidateTransaction"]},{"text":"impl StructOpt for <a class=\"struct\" href=\"libra_operational_tool/validator_config/struct.SetValidatorConfig.html\" title=\"struct libra_operational_tool::validator_config::SetValidatorConfig\">SetValidatorConfig</a>","synthetic":false,"types":["libra_operational_tool::validator_config::SetValidatorConfig"]},{"text":"impl StructOpt for <a class=\"struct\" href=\"libra_operational_tool/validator_config/struct.RotateKey.html\" title=\"struct libra_operational_tool::validator_config::RotateKey\">RotateKey</a>","synthetic":false,"types":["libra_operational_tool::validator_config::RotateKey"]},{"text":"impl StructOpt for <a class=\"struct\" href=\"libra_operational_tool/validator_config/struct.RotateConsensusKey.html\" title=\"struct libra_operational_tool::validator_config::RotateConsensusKey\">RotateConsensusKey</a>","synthetic":false,"types":["libra_operational_tool::validator_config::RotateConsensusKey"]},{"text":"impl StructOpt for <a class=\"struct\" href=\"libra_operational_tool/validator_config/struct.RotateValidatorNetworkKey.html\" title=\"struct libra_operational_tool::validator_config::RotateValidatorNetworkKey\">RotateValidatorNetworkKey</a>","synthetic":false,"types":["libra_operational_tool::validator_config::RotateValidatorNetworkKey"]},{"text":"impl StructOpt for <a class=\"struct\" href=\"libra_operational_tool/validator_config/struct.RotateFullNodeNetworkKey.html\" title=\"struct libra_operational_tool::validator_config::RotateFullNodeNetworkKey\">RotateFullNodeNetworkKey</a>","synthetic":false,"types":["libra_operational_tool::validator_config::RotateFullNodeNetworkKey"]},{"text":"impl StructOpt for <a class=\"struct\" href=\"libra_operational_tool/validator_config/struct.ValidatorConfig.html\" title=\"struct libra_operational_tool::validator_config::ValidatorConfig\">ValidatorConfig</a>","synthetic":false,"types":["libra_operational_tool::validator_config::ValidatorConfig"]},{"text":"impl StructOpt for <a class=\"struct\" href=\"libra_operational_tool/validator_set/struct.ValidatorSet.html\" title=\"struct libra_operational_tool::validator_set::ValidatorSet\">ValidatorSet</a>","synthetic":false,"types":["libra_operational_tool::validator_set::ValidatorSet"]}];
implementors["test_generation"] = [{"text":"impl StructOpt for <a class=\"struct\" href=\"test_generation/config/struct.Args.html\" title=\"struct test_generation::config::Args\">Args</a>","synthetic":false,"types":["test_generation::config::Args"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()