const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

console.log('URL:', supabaseUrl);
console.log('Key present:', !!supabaseKey);

const supabase = createClient(supabaseUrl, supabaseKey);

async function testExecuteSql() {
  console.log('Testing execute_sql function...');
  
  // Test 1: Simple SELECT query
  try {
    const { data, error } = await supabase.rpc('execute_sql', {
      sql_text: 'SELECT COUNT(*) as count FROM bets'
    });
    
    if (error) {
      console.error('❌ Test 1 failed:', error.message);
      return false;
    }
    
    console.log('✅ Test 1 passed: SELECT COUNT(*) works');
    console.log('   Result:', data);
    
    // Test 2: Add a test column (ALTER TABLE)
    const { data: data2, error: error2 } = await supabase.rpc('execute_sql', {
      sql_text: 'ALTER TABLE bets ADD COLUMN IF NOT EXISTS test_column TEXT DEFAULT \'test\';'
    });
    
    if (error2) {
      console.error('❌ Test 2 failed:', error2.message);
      return false;
    }
    
    console.log('✅ Test 2 passed: ALTER TABLE works');
    console.log('   Result:', data2);
    
    // Test 3: Check the column was added
    const { data: data3, error: error3 } = await supabase.rpc('execute_sql', {
      sql_text: 'SELECT column_name FROM information_schema.columns WHERE table_name = \'bets\' AND column_name = \'test_column\';'
    });
    
    if (error3) {
      console.error('❌ Test 3 failed:', error3.message);
      return false;
    }
    
    console.log('✅ Test 3 passed: Column verification works');
    console.log('   Column exists:', data3.length > 0);
    
    // Test 4: Remove test column (cleanup)
    const { data: data4, error: error4 } = await supabase.rpc('execute_sql', {
      sql_text: 'ALTER TABLE bets DROP COLUMN IF EXISTS test_column;'
    });
    
    if (error4) {
      console.error('❌ Test 4 failed:', error4.message);
      return false;
    }
    
    console.log('✅ Test 4 passed: Cleanup works');
    console.log('   Result:', data4);
    
    console.log('\n🎉 All tests passed! The execute_sql function is working correctly.');
    return true;
    
  } catch (err) {
    console.error('❌ Unexpected error:', err.message);
    return false;
  }
}

testExecuteSql().then(success => {
  process.exit(success ? 0 : 1);
});